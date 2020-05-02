const canvasId = 'game';
const ImageEntity = require('./entities/image');
const TextEntity = require('./entities/text');

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

/**
 * Draw an Entity on the canvas
 * @param {Entity} entity 
 */
function drawEntity(entity) {
    switch (entity.constructor.name) {
        case 'ImageEntity':
            drawImage(entity);
            break;
        case 'TextEntity':
            drawText(entity);
            break;
    }
}

function drawImage(entity) {
    if (entity.visible) {
        getContext().drawImage(entity.drawing, entity.xPos, entity.yPos, entity.width, entity.height);
    }
}

function drawText(entity) {
    if (entity.visible) {

        var context = getContext();

        context.font = entity.font;
        context.fillText(entity.text, entity.xPos, entity.yPos);
    }
}

function getContext() {
    return $('#' + canvasId)[0].getContext('2d');
}

module.exports = {
    generateCanvas: generateCanvas,
    drawEntity: drawEntity
}