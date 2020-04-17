var canvasUtils = require('./canvas.js');
var container = document.getElementById('container');

function Game(width, height) {
    this.viewport = canvasUtils.generateCanvas(width, height);
    this.context = viewport.getContext('2d');

    this.viewport.width = 800;
    this.viewport.height = 600;

    container.insertBefore(this.viewport, container.firstChild);

    this.context.font = '32px Arial';
    this.context.fillText('test', 5, 50, 800);

    return this;
}

window.game = new Game(width, height);

exports = game;