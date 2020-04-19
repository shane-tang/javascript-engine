const canvasUtils = require('./canvas.js');
const gameContainer = $('#gameContainer');

const width = 1920;
const height = 1080;
alert(window.devicePixelRatio);

var game = function game() {
    this.viewport = canvasUtils.generateCanvas(width, height);
    this.context = viewport.getContext('2d');

    this.viewport.width = width;
    this.viewport.height = height;

    gameContainer.append(this.viewport);

    this.context.font = '32px Arial';
    this.context.fillText('test', 5, 50, 800);

    var drawing = new Image();
    drawing.src = "img.jpg";
    drawing.onload = () => {
        this.context.drawImage(drawing,0,0);
    }

    return this;
}

window.viewport = game();

module.exports = game;