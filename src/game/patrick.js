const ImageEntity = require('../entities/image');
var GAME;
var patrick;
var velocity = 5;

function init() {
    GAME = window.game;

    patrick = new ImageEntity({
        id: "test image",
        filepath: "img.jpg",
    });

    GAME.pushEntity(patrick);

    patrick.onKeyPress('s', () => {
        patrick.yPos += 5;
    });

    patrick.onClick(() => {
        patrick.yPos -= 5;
    });
}

function onStart() {

}

function eachTick(entities) {
    patrick.xPos += velocity;
    if (patrick.xPos + patrick.width > GAME.width || patrick.xPos < 0) {
        velocity *= -1;
        patrick.xPos += (velocity * 5);
    }
}

function moveRight(amount) {
    patrick.xPos += amount;
}

module.exports = {
    init: init,
    onStart: onStart,
    eachTick: eachTick
};