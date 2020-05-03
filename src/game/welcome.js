const TextEntity = require('../entities/text');
var GAME;
var welcomeText;

function init() {
    GAME = window.game;

    welcomeText = new TextEntity({
        text: "welcome 2 my game",
        font: "69px Comic Sans MS",
        xPos: game.width / 2,
        yPos: game.height / 2
    })

    GAME.pushEntity(welcomeText);
}

function onStart() {

}

function eachTick(entities) {

}

module.exports = {
    init: init,
    onStart: onStart,
    eachTick: eachTick
}