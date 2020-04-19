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

        canvas.width = gameWidth;
        canvas.height = gameHeight;


        // wide to narrow
        if (windowRatio > gameRatio) {
            // scale via width
            var scaleFactor = gameRatio / windowRatio;
            canvas.style.width = windowWidth * scaleFactor + 'px';
            canvas.style.height = windowHeight + 'px';
        }
        else {
        // if (windowRatio < gameRatio) {
            var scaleFactor = windowRatio / gameRatio;
            canvas.style.width = windowWidth + 'px';
            canvas.style.height = windowHeight * scaleFactor + 'px';
        }


        // canvas.width = Math.round(gameWidth * ratio);
        // canvas.height = Math.round(gameHeight * ratio);
        // canvas.style.width = windowWidth + 'px';
        // canvas.style.height = windowHeight + 'px';

        // context.scale(scaleFactor, scaleFactor);

        // context.setTransform(ratio, 0, 0, ratio, 0, 0)
        canvas.style.border = '2px solid blue';

        return canvas
    }
}