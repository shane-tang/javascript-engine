class Game {
    constructor(width, height, targetFps, showFps) {
        this.constants = {
            width: width,
            height: height,
            targetFps: targetFps,
            showFps: showFps
        };

        this.state = {};
    }
}

window.game = new Game(1920, 1080, 60, true);