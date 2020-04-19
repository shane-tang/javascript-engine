module.exports = {
    generateCanvas: function generateCanvas(gameWidth, gameHeight) {
        var canvas = document.createElement('canvas');
        canvas.id = "game";
        var context = canvas.getContext('2d');

        var ratio = window.devicePixelRatio || 1;



        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;

        var gameRatio = gameWidth / gameHeight;



        canvas.width = Math.round(gameWidth * ratio);
        canvas.height = Math.round(gameHeight * ratio);
        canvas.style.width = gameWidth + 'px';
        canvas.style.height = gameHeight + 'px';

        context.setTransform(ratio, 0, 0, ratio, 0, 0)
        canvas.style.border = '2px solid blue';

        return canvas
    }
}