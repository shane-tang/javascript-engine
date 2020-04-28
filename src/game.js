const canvasUtils = require('./canvas.js');

const width = 1080;
const height = 1920;

var game = function game() {
    this.viewport = canvasUtils.generateCanvas(width, height);
    this.context = viewport.getContext('2d');

    $('body').append(this.viewport);

    var drawing = new Image();
    drawing.src = "img.jpg";
    drawing.onload = () => {
        drawing.width = drawing.width;
        drawing.height = drawing.height;
        // context.drawImage(drawing,0,0);
    }
    
    this.context.font = '32px Arial';
    this.context.fillText(window.devicePixelRatio, 5, 500);

    return this;
}

window.gameWidth = width;
window.gameHeight = height;
window.viewport = game();

module.exports = game;