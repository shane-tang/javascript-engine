const ImageEntity = require('./entities/image');
const canvasUtils = require('./canvas');

class Game {
    constructor(width, height, targetFps, showFps) {
        this.canvas = canvasUtils.generateCanvas(width, height);
        this.context = this.canvas.getContext('2d');

        this.entities = new Array(); // array of Entity objects
        
        // TODO: move DOM drawing to outside of game constructor
        $('body').append(this.canvas);

        // var drawing = new Image();
        // drawing.src = "img.jpg";
        // drawing.onload = () => {
        //     drawing.width = drawing.width;
        //     drawing.height = drawing.height;
        //     this.context.drawImage(drawing, 0, 0);
        // };

        // this.context.font = '32px Arial';
        // this.context.fillText(window.devicePixelRatio, 5, 500);

        var test = new ImageEntity({
            filepath: "img.jpg",
            game: this
        })

        this.createEntity(test);

        setTimeout(() => {
            canvasUtils.drawImage(test.drawing, test.xPos, test.yPos);
        }, 2000);



    }

    /**
     * Adds entity to the game's entity collection
     * @param {Entity} entity 
     */
    createEntity(entity) {
        this.entities.push(entity);
    }
}

var game = new Game(1920, 1080);

window.gameWidth = 1920;
window.gameHeight = 1080;
window.game = game;

module.exports = game;