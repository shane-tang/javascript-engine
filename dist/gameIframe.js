var gameIframe = document.createElement('iframe');
gameIframe.id = "gameIframe";
gameIframe.src = "game.html";
gameIframe.scrolling = 'no';
gameIframe.frameBorder = '0';


gameIframe.onload = function() {
    let gameWidth = gameIframe.contentWindow.gameWidth;
    let gameHeight = gameIframe.contentWindow.gameHeight;

    gameIframe.width = gameWidth;
    gameIframe.height = gameHeight;
    
    var windowRatio = window.innerWidth / window.innerHeight;
    var gameRatio = gameWidth / gameHeight;

    let deviceDensityScale = window.devicePixelRatio || 1;

    if (windowRatio > gameRatio) {
        let scaleFactor = (1 / deviceDensityScale) * gameRatio;
        gameIframe.style.transform = 'scale(' + scaleFactor + ', ' + scaleFactor + ')';
    }



}

$('body').append(gameIframe);