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

    if (windowRatio > gameRatio) {
        var scaleFactor = window.innerHeight / gameHeight;
    } else {
        var scaleFactor = window.innerWidth / gameWidth;
    }
    gameIframe.style.transform = 'scale(' + scaleFactor + ', ' + scaleFactor + ')';

    $('#gameContainer').css("height", gameHeight * scaleFactor + "px");

}

$('#gameContainer').append(gameIframe);