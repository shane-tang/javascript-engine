const ImageEntity = require('./entities/image');
const TextEntity = require('./entities/text');

function init() {
    var testImage = new ImageEntity({
        id: "test image",
        filepath: "img.jpg",
        game: this
    })

    window.game.pushEntity(testImage);

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