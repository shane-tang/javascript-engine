const canvasUtils = require('../canvas');

class Entity {
    /**
     * TODO: should be abstract, fix params
     * @param {String} id
     * @param {Number} xPos 
     * @param {Number} yPos 
     * @param {Boolean} visible 
     */
    constructor({
        id,
        xPos = 0,
        yPos = 0,
        visible = true
    }) {
        this.game = window.game;
        this.xPos = xPos;
        this.yPos = yPos;
        this.visible = visible;
    }

    /**
     * Checks if an update is needed then redraws if necessary
     * @param {Entity} last 
     */
    update(last) {
        if (!this.equals(last)) {
            canvasUtils.drawEntity(this);
        }
    }

    /**
     * Compare two entities by value
     * @param {Entity} that 
     */
    equals(that) {
        return false;
        return (
            this.game === that.game &&
            this.xPos === that.xPos &&
            this.yPos === that.yPos &&
            this.width === that.width &&
            this.height === that.height &&
            this.visible === that.visible
        );
    }
}

module.exports = Entity;