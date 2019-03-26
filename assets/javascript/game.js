// ////
// //// 
// //// DEFINE ALL THE VARIABLES RELATED TO THE SHIPS

function ShipStats(name, hp, attackBase, attackCounter, attackSpecial, shipActionID, shipID, shipNumber, shipAttackImage, shipImage) {
    this.name = name;
    this.hp = hp;
    this.attackBase = attackBase;
    this.attackCounter = attackCounter;
    this.attackSpecial = attackSpecial;
    this.shipActionID = shipActionID;
    this.shipID = shipID;
    this.shipNumber = shipNumber;
    this.shipAttackImage = shipAttackImage;
    this.shipImage = shipImage;
};

var halberd = new ShipStats('Halberd', 150, 50, 15, .7, "shipAction1", "ship1", 1, "./assets/images/shipAction1.png", "./assets/images/ship1.png");
// console.log(halberd);
var rufus = new ShipStats('Rufus', 175, 7.5, 15, 1.5, "shipAction2", "ship2", 2, "./assets/images/shipAction2.png", "./assets/images/ship2.png");
// console.log(rufus);
// Test variable pull from array
// console.log(rufus.hp);
var snake = new ShipStats('Snake', 200, 10, 15, 1.2, "shipAction3", "ship3", 3, "./assets/images/shipAction3.png", "./assets/images/ship3.png");
// console.log(snake);
var larry = new ShipStats('Larry', 125, 40, 15, 1, "shipAction4", "ship4", 4, "./assets/images/shipAction4.png", "./assets/images/ship4.png");
// console.log(larry);

const shipInitialState = {
    halberd,
    rufus,
    snake,
    larry,
};
console.log(shipInitialState)

// THE GAME VALUES INPUT
let allShipStats = {};

const game = {
    status: {
        gameover: false,
        win: false,
        loss: false
    },
    selectShip: "",
    selectEnemy: "",
    // playerInstructions: [
    //     "Choose your ship",
    //     "Choose your enemy",
    //     "Click the button to retry!",
    // ],
    defeatEnemies: 0,
    allShips: 0,

    victory() {
        return this.defeatEnemies === this.allShips - 1;
    },
    fight(selectShip, selectDefender) {
        const selectShipAttack = allShipStats[selectShip].attackBase;
        allShipStats[selectShip].hp -= allShipStats[selectDefender].attackCounter;
        allShipStats[selectDefender].hp -= selectShipAttack;
        allShipStats[selectShip].attackBase += shipInitialState[selectShip].attackBase;
    },
    setGameState(gameover, win, loss) {
        this.status.gameover = gameover;
        this.status.win = win;
        this.status.loss = loss;
    },
    resetGameState() {
        this.selectShip = "";
        this.selectEnemy = "";
        this.setGameState(false, false, false);
        this.allShips = 0;
        this.defeatEnemies = 0;
    }
};

$(document).ready(function () {

    function bindCharacterClick(box) {
        // Binds character box click, which will move it to appropriate row based on game status
        box.click(function () {
            if (!game.selectShip) {
                box.addClass("chosen-character");
                $("#all-ships").children(".character-box").each(function () {
                    if (!$(this).is(box)) {
                        $(this).addClass("enemy")
                        $("#available-enemies").append($(this));
                    }
                });
                game.selectShip = box.attr("name");
            } else if (!game.selectEnemy && game.selectShip) {
                box.addClass("selectDefender");
                $("#selectDefender").append(box);
                game.selectEnemy = box.attr("name");
            }
        })
    }

    function resetGame() {

        // Reset game status
        game.resetGameState();

        // Remove character boxes from all rows
        [$("#all-ships"), $("#available-enemies"), $("#selectDefender"), $("#enemyDefeated")].forEach(shipGraphicAsset => {
            shipGraphicAsset.empty();
        });

        // FUNCTION THAT DEFINES ALL THE STATS FROM JSON OBJECTS TO BE PULLED INTO EACH SHIP'S DISPLAY
        allShipStats = JSON.parse(JSON.stringify(shipInitialState));
        Object.values(allShipStats).forEach(stats => {
            game.allShips++;

            const characterBox = $("<div>");
            const name = $("<div>");
            const hp = $("<div>");
            const attack = $("<div>");
            const image = $('<img>');

            name.text(stats.name);
            image.attr('src', stats.shipAttackImage)
            hp
                .text("Health: " + stats["hp"])
                .attr("class", "hp");
            attack
                .text("Attack: " + stats.attackBase)
                .attr("class", "attack");

            characterBox
                .addClass("character-box")
                .attr("name", stats.name)
                .attr("id", stats.name)
                .append(name)
                .append(hp)
                .append(attack)
                .append(image)

            bindCharacterClick(characterBox);

            $("#all-ships").append(characterBox);
        });
    }


    // Resets game display and internal game status
    $("#buttonReset").click(() => {
        resetGame();
    });

    // Logic and display handling fight button click
    $("#buttonAttack").click(() => {
        if (game.status.gameover) {
            return;
        }
        if (!game.selectShip || !game.selectEnemy) {
            $("#enemyDefeated").text("No enemy selected.")
            return;
        }
        const selectShipStr = game.selectShip;
        const selectDefenderStr = game.selectEnemy;
        const selectShip = allShipStats[selectShipStr];
        const selectDefender = allShipStats[selectDefenderStr];
        const yourAttack = selectShip.attackBase;
        const selectDefenderAttack = selectDefender.attackCounter;

        game.fight(selectShipStr, selectDefenderStr);

        if (selectShip.hp <= 0) {
            game.setGameState(true, false, true)
            $("#buttonReset");
        }
        if (selectDefender.hp <= 0) {
            $("#selectDefender").empty();
            game.selectEnemy = "";
            game.defeatEnemies++;
            $("#enemyDefeated").text("You have defeated " + selectDefenderStr + "! Choose another enemy to continue.");

        } else {
            $("#" + selectDefenderStr)
                .children(".hp")
                .text("Health: " + selectDefender.hp);
            $("#enemyDefeated").text("You attacked " + selectDefenderStr + " for " + yourAttack + " damage. "
                + selectDefenderStr + " attacked you for back for " + selectDefenderAttack + " damage.");
        }

        // DISPLAY NEW HP AND ATTACK
        
        const selectShipObj = $("#" + selectShipStr);
        selectShipObj
            .children(".hp")
            .text("Health: " + selectShip.hp);
        selectShipObj
            .children(".attack")
            .text("Attack: " + selectShip.attackBase);

        if (game.status.loss) {
            $("#enemyDefeated").text(selectDefenderStr + " defeated you. /nGAME-OVER! Press RETRY to go again.");
        }
        else if (game.victory()) {
            game.setGameState(true, true, false)
            $("#enemyDefeated").text("You won! Press RETRY to go again.");
        }
    });

    function main() {
        resetGame();
    }

    // BEGIN THE GAME 
    main();
});





// //// WORKING CODE/OTHER OPTIONS CUT FROM WORKING MODEL TO ARCHIVE
// ////
// ////

// FIX //// Attempted to apply hp, and other stats by assigning the constructor functions to an array and looping through.
// //// It works ALMOST as expected, however, I can't get the output to increment correctly. 
// //// The full array is applied to each class, i.e. for hp, 150175200125 flashes for all 4 characters.

// var shipsAll = [halberd, rufus, snake, larry];
// console.log(shipsAll);

// function shipAssignment () {
//     for (let i = 0; i < shipsAll.length; i++) {
//         // console.log(shipsAll[i].name);
//         console.log(shipsAll[i].hp);
//         // console.log($(shipsAll[i].hp));
//         // console.log(shipsAll[i].attackBase);
//         // console.log(shipsAll[i].shipNumber);
//         // console.log(shipsAll[i].shipActionID);
//         // console.log(shipsAll[i].shipID);
//         $('.shipHP').append(shipsAll[i].hp);
//     }
// };
// shipAssignment();

// //// HOME BUTTON LOCATION FOR PLAYER SELECT
// $("button").on("click", function() {
//     captainPlanet.animate({ top: "50px", left: "80px" }, "fast");
//   });


// // buttons that alert with TF logic
// $(document).ready(function clickButton() {
//     $("#buttonShip1").click(function(){
//         if (confirm("Select HALBERD?"));
//     }); 
//     $("#buttonShip2").click(function(){
//         if (confirm("Select RUFUS?"));
//     }); 
//     $("#buttonShip3").click(function(){
//         if (confirm("Select SNAKE?"));
//     }); 
//     $("#buttonShip4").click(function(){
//         if (confirm("Select LARRY?"));
//     }); 
// });


// appply function from mdn
// function ShipAttacks(obj, objName) {
//     var result = '';
//     for (var i in obj) {
//       // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//       if (obj.hasOwnProperty(i)) {
//         result += objName + '.' + i + ' = ' + obj[i] + '\n';
//       }
//     }
//     return result;
// };

// console.log(ShipAttacks());

// $(".number").on("click", function() {

//     // Check if we've already run a calculation, if so... we'll just.
//     if (isCalculated) {
//         return false;
//     }

//     // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
//     if (isOperatorChosen) {
//         secondNumber += $(this).val();
//         $("#second-number").text(secondNumber);

//     }
//     else {
//         firstNumber += $(this).val();
//         $("#first-number").text(firstNumber);
//     }

//     });

// //// PSEUDOCODE FOR REFERENCE
// ////
// ////

// reset w/l to 0
// reset hpEnemy
// play welcome text "choose your ship" in right panel
// set buttons


// if var selectEnemy = false then buttononclick doesnt work
//     if true then onbutton click...


// on Player selection 
//     alert "you have selected" + name
//     if false, continue until selectShip = true.
//         if true, continue
//         remove all "col-3" divs then insert a new col-4 div (has an opacity of .5) for the remaining 3 enemies.
//         move selected player to left panel
//         replace welcome text player selection with "choose your enemy ... wisely"
//             onclick, opacity changes to 1 and alert "you have selected" + name
//             if false, continue until selectEnemy = true.
//                 if true, continue to game

// on attackbutton select () {
//     attack method();
//     alert you attack 
//     defense method();
//     alert you receive
//     loop until player/enemy hp = 0
// };