const canvasId = "game";

function generateCanvas(gameWidth, gameHeight) {
    var canvas = document.createElement('canvas');
    canvas.id = canvasId;

    canvas.width = gameWidth;
    canvas.height = gameHeight;
    canvas.style.width = gameWidth
    canvas.style.height = gameHeight;

    var context = canvas.getContext('2d');
    context.lineWidth = 10;
    context.strokeRect(0, 0, gameWidth, gameHeight);

    return canvas;
}

function drawImage(image, xPos, yPos) {
    var context = $('#' + canvasId)[0].getContext('2d');

    context.drawImage(image, xPos, yPos);

}

module.exports = {
    generateCanvas: generateCanvas,
    drawImage: drawImage
}