// reset w/l to 0
// reset hpEnemy
// play welcome text "choose your ship" in right panel
// set buttons


// if var selectEnemy = false then buttononclick doesnt work
//     if true then onbutton click...


// on Player selection 
//     alert "you have selected" + name
//     if false, continue until selectPlayer = true.
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


// define button clicks () {
    
    // };
    
    
$(document).ready(function() {
    
    function ShipStats(name, hp, attackBase, shipNumber, shipActionID, shipID) {
        this.name = name;
        this.hp = hp;
        this.attackBase = attackBase;
        this.shipNumber = shipNumber;
        this.shipActionID = shipActionID;
        this.shipID = shipID;
    };
    
    var halberd = ShipStats('Halberd', 150, 10, 1, "shipAction1", "ship1");
    // console.log(halberd);
    var rufus = ShipStats('Rufus', 175, 10, 2, "shipAction2", "ship2");
    // console.log(rufus);
    var snake = ShipStats('Snake', 200, 10, 3, "shipAction3", "ship3");
    // console.log(snake);
    var larry = ShipStats('Larry', 125, 10, 4, "shipAction4", "ship4");
    // console.log(larry);
    
    var shipsAll = [halberd, rufus, snake, larry];
    // Test variable pull from array
    // var rufusHP = shipsAll[1].hp;
    // console.log(rufusHP);
    var rufusHP = shipsAll;
    console.log(rufusHP);


    // for (let i = 0; i < shipsAll.length; i++) {
    //     return 
    // }
  
    var selectPlayer = false;
    var selectEnemy = false;

    var playerInstructions = [
        "Choose your ship",
        "Choose your enemy",
        "Click the button to retry!",
    ];
    










});



// wildcard calling script
// $('[id^=success][id$=' + number + ']').show();

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