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


var wins = 0;
var losses = 0;
var selectPlayer = false;
var selectEnemy = false;
var playerInstructions = [
    "Choose your ship",
    "Choose your enemy",
    "Click the button to retry!",
];
var shipStats1 = {
    name: "Halberd",
    hp: 150,
    attack: 10,
    myAttack: function () {

    },
};




$(document).ready(function clickButton() {
    $("#buttonShip1").click(function(){
        if (confirm("Select HALBERD?"));
    }); 
    $("#buttonShip2").click(function(){
        if (confirm("Select SWITCH?"));
    }); 
    $("#buttonShip3").click(function(){
        if (confirm("Select SNAKE?"));
    }); 
    $("#buttonShip4").click(function(){
        if (confirm("Select LARRY?"));
    }); 
});

