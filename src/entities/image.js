const Entity = require('./entity');
const canvasUtils = require('../canvas');

class ImageEntity extends Entity {
    /**
     * TODO: i think this can be better
     * @param {String} filepath 
     * @param {Game} game 
     * @param {Number} xPos 
     * @param {Number} yPos 
     * @param {Number} width 
     * @param {Number} height 
     * @param {Boolean} visible 
     */
    constructor({
        filepath,
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
        
        this.loaded = false;
        this.drawing = new Image();
        this.drawing.src = filepath;
        this.drawing.onload = () => {
            this.loaded = true;
            this.game.entityLoaded();
            // canvasUtils.drawImage(drawing, this.xPos, this.yPos);
        }
    }

}

module.exports = ImageEntity;