const guys = require('../game');
var GAME;

function init() {
    GAME = window.game;

    guys.patrick.init();
    guys.welcome.init();

    onStart();
}

function onStart() {
    guys.patrick.onStart();
    guys.welcome.onStart();
}

/**
 * 
 * @param {Entity[]} entities 
 */
function eachTick(entities) {
    guys.patrick.eachTick(entities);
    guys.welcome.eachTick(entities);
}

module.exports = {
    init: init,
    onStart: onStart,
    eachTick: eachTick
};