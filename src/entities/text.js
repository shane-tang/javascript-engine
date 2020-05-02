const Entity = require('./entity');
const canvasUtils = require('../canvas');

class TextEntity extends Entity {
    /**
     * TODO: i think this can be better
     * @param {String} text 
     * @param {String} font
     * @param {Number} xPos 
     * @param {Number} yPos 
     * @param {Boolean} visible 
     */
    constructor({
        text = 'Default text',
        font = '32px Arial',
        xPos,
        yPos,
        visible
    }) {
        super({
            xPos: xPos,
            yPos: yPos,
            visible: visible
        });

        this.text = text;
        this.font = font;

        this.game.entityLoaded();

    }
}

module.exports = TextEntity;