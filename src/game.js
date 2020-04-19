const canvasUtils = require('./canvas.js');
const gameContainer = $('#gameContainer');

const width = 1080;
const height = 1920;

var game = function game() {
    this.viewport = canvasUtils.generateCanvas(width, height);
    this.context = viewport.getContext('2d');

    gameContainer.append(this.viewport);

    var drawing = new Image();
    drawing.src = "img.jpg";
    drawing.onload = () => {
        this.context.drawImage(drawing,0,0);
    }
    
    this.context.font = '32px Arial';
    this.context.fillText(window.devicePixelRatio, 5, 50, 800);

    return this;
}

window.viewport = game();

module.exports = game;