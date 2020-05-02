const canvasUtils = require('./canvas');
const logic = require('../game/logic');

class Game {
    constructor(width, height, showFps) {
        this.width = width;
        this.height = height;

        this.canvas = canvasUtils.generateCanvas(width, height);
        this.context = this.canvas.getContext('2d');

        this.entities = new Array(); // array of Entity objects
        this.loadedEntities = 0;
        
        // TODO: move DOM drawing to outside of game constructor
        $('body').append(this.canvas);
    }

    startGame() {
        logic.init();
        window.requestAnimationFrame(this.gameLoop);
    }

    gameLoop(timeStamp) {
        logic.eachTick(window.game.entities);
        window.game.render();
        window.requestAnimationFrame(window.game.gameLoop);
    }

    render() {
        canvasUtils.clearCanvas();
        this.entities.forEach(entity => {
            entity.update();
        });
    }

    /**
     * Adds entity to the game's entity collection
     * @param {Entity} entity 
     */
    pushEntity(entity) {
        this.entities.push(entity);
    }

    entityLoaded() {
        this.loadedEntities++;

        if (this.loadedEntities >= this.entities.length) {
            this.finishedLoading();
        }
    }

    finishedLoading() {
        this.entities.forEach(entity => {
            canvasUtils.drawEntity(entity);
        });
    }

    onKeyPress(key, callback) {
        document.addEventListener('keypress', event => {
            if (event.key.toLowerCase() === key.toLowerCase()) {
                callback();
            }
        });
    }
}

var game = new Game(1920, 1080);

window.gameWidth = 1920;
window.gameHeight = 1080;
window.game = game;

game.startGame();

module.exports = Game;