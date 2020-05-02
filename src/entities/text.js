const Entity = require('./entity');
const canvasUtils = require('../canvas');

class TextEntity extends Entity {
    /**
     * TODO: i think this can be better
     * @param {String} text 
     * @param {String} font
     * @param {Game} game 
     * @param {Number} xPos 
     * @param {Number} yPos 
     * @param {Number} width 
     * @param {Number} height 
     * @param {Boolean} visible 
     */
    constructor({
        text = 'Default text',
        font = '32px Arial',
        game,
        xPos,
        yPos,
        width,
        height,
        visible
    }) {
        super({
            game: game,
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