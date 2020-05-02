class Entity {
    /**
     * TODO: should be abstract, fix params
     * @param {Game} game 
     * @param {Number} xPos 
     * @param {Number} yPos 
     * @param {Boolean} visible 
     */
    constructor({
        game,
        xPos = 0,
        yPos = 0,
        width,
        height,
        visible = true
    }) {
        this.game = game;
        this.xPos = xPos;
        this.yPos = yPos;
        this.visible = visible;
    }
}

module.exports = Entity;