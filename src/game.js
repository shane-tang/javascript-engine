const canvasUtils = require('./canvas.js');
const container = document.getElementById('container');

const width = 1920;
const height = 1080;

var game = function game() {
    this.viewport = canvasUtils.generateCanvas(width, height);
    this.context = viewport.getContext('2d');

    this.viewport.width = width;
    this.viewport.height = height;

    container.insertBefore(this.viewport, container.firstChild);

    this.context.font = '32px Arial';
    this.context.fillText('test', 5, 50, 800);

    return this;
}

window.game = game();

module.exports = game;