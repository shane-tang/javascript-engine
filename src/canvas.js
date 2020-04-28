module.exports = {
    generateCanvas: function generateCanvas(gameWidth, gameHeight) {
        var canvas = document.createElement('canvas');
        canvas.id = "game";

        canvas.width = gameWidth;
        canvas.height = gameHeight;
        canvas.style.width = gameWidth
        canvas.style.height = gameHeight;

        var context = canvas.getContext('2d');
        context.lineWidth = 10;
        context.strokeRect(0, 0, gameWidth, gameHeight);

        return canvas
    }
}



        // var windowWidth = window.innerWidth;
        // var windowHeight = window.innerHeight;
        // var windowRatio = windowWidth / windowHeight;

        // var gameRatio = gameWidth / gameHeight;


        // if (windowRatio > gameRatio) {
        //     window.scaleFactor = gameRatio / windowRatio;
        //     canvas.style.width = windowWidth * window.scaleFactor + 'px';
        //     canvas.style.height = windowHeight + 'px';
        // } else {
        //     window.scaleFactor = windowRatio / gameRatio;
        //     canvas.style.width = windowWidth + 'px';
        //     canvas.style.height = windowHeight * window.scaleFactor + 'px';
        // }
