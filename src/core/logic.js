const ImageEntity = require('../entities/image');
const TextEntity = require('../entities/text');

function init() {
    const GAME = window.game; // TODO: fix

    var testImage = new ImageEntity({
        id: "test image",
        filepath: "img.jpg",
    });

    var welcomeText = new TextEntity({
        text: "welcome 2 my game",
        font: "69px Comic Sans MS",
        xPos: game.width / 2,
        yPos: game.height / 2
    })

    GAME.pushEntity(testImage);
    GAME.pushEntity(welcomeText);

}

/**
 * 
 * @param {Entity[]} entities 
 */
function eachTick(entities) {
    entities.forEach((entity) => {
        entity.xPos++;
    })
}

module.exports = {
    init: init,
    eachTick: eachTick
};