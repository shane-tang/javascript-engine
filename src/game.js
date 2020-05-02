const ImageEntity = require('./entities/image');
const TextEntity = require('./entities/text');
const canvasUtils = require('./canvas');

class Game {
    constructor(width, height, targetFps, showFps) {
        this.canvas = canvasUtils.generateCanvas(width, height);
        this.context = this.canvas.getContext('2d');

        this.entities = new Array(); // array of Entity objects
        this.loadedEntities = 0;
        
        // TODO: move DOM drawing to outside of game constructor
        $('body').append(this.canvas);

        var testImage = new ImageEntity({
            filepath: "img.jpg",
            game: this
        })

        var testText = new TextEntity({
            text: "this is the test text",
            game: this
        })

        this.entities.push(testImage);
        this.entities.push(testText);
        
    }

    /**
     * Adds entity to the game's entity collection
     * @param {Entity} entity 
     */
    createEntity(entity) {
        this.entities.push(entity);
    }

    entityLoaded() {
        this.loadedEntities++;

        if (this.loadedEntities >= this.entities.length) {
            this.finishedLoading();
        }
    }

    finishedLoading() {
        this.entities.forEach((entity) => {
            canvasUtils.drawEntity(entity);
        });
    }
}

var game = new Game(1920, 1080);

window.gameWidth = 1920;
window.gameHeight = 1080;
window.game = game;

module.exports = game;