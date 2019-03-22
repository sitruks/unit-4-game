# unit-4-game

Although I found the pseudocoding phase very beneficial, I could not save myself from completely customizing the UI and game flow.
As such, I will return to this project to add the missing capabilities.


|-------------------------------------------------|
| Gathered art assets from the following sources: |
|-------------------------------------------------|

Background: https://www.google.com/search?q=x+wing+screenshots&tbm=isch&tbs=rimg:CdMAkuwRGLR7IjjGId6kBSvZXDJLJG-cpIM5EBvOu0-NMQ1VUpavKzPMXaaJPgAAma0rZE6B6QhSob4Q4NSr2mlaPioSCcYh3qQFK9lcEW9KcnXxxeinKhIJMkskb5ykgzkREcMr72EAGV4qEgkQG867T40xDRESD0pyWFh_1ySoSCVVSlq8rM8xdEdXegF41ElDcKhIJpok-AACZrSsRxbVOaRrb7owqEglkToHpCFKhvhH82lQ3pbOlsyoSCRDg1KvaaVo-EdcWm9DWCM_1H&tbo=u&sa=X&ved=2ahUKEwjd5KHBk5LhAhWMrZ4KHYI-A5kQ9C96BAgBEBs&biw=2160&bih=1126&dpr=1.33#imgdii=wEV7qmA240w5lM:&imgrc=DtfAm6u1zWmpkM:

Spaceships: https://opengameart.org/content/astrominer-sprites

CSS Styling magic was made with the help of the wizards here: https://nostalgic-css.github.io/NES.css/


Pseudocode: 

Define the variables

var wins = 0;
var losses = 0;
var hpEnemy = [];
var hpPlayer = [];
var hpActiveEnemy;
var hpActivePlayer;
var selectPlayer = false;
var selectEnemy = false;
var attackPowerEnemy;
var attackPowerPlayer;


reset w/l to 0
reset hpEnemy
play welcome text "choose your ship" in right panel
set buttons


if var selectEnemy = false then buttononclick doesnt work
    if true then onbutton click...


on Player selection 
    alert "you have selected" + name
    if false, continue until selectPlayer = true.
        if true, continue
        remove all "col-3" divs then insert a new col-4 div (has an opacity of .5) for the remaining 3 enemies.
        move selected player to left panel
        replace welcome text player selection with "choose your enemy ... wisely"
            onclick, opacity changes to 1 and alert "you have selected" + name
            if false, continue until selectEnemy = true.
                if true, continue to game

on attackbutton select () {
    attack method();
    alert you attack 
    defense method();
    alert you receive
    loop until player/enemy hp = 0
};


define button clicks () {

};

define ship stats () {
    var enemy1 = {
        hpValue: 100,
        attackValue: 1,
        function specialAttack() {every 3rd attack do X}
    };
};
