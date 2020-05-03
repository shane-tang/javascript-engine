class Events {
    onKeyPress(key, callback) {
        document.addEventListener('keypress', event => {
            if (event.key.toLowerCase() === key.toLowerCase()) {
                callback();
            }
        });
    }

    onClick(callback) {
        document.addEventListener('click', callback);
    }
}

module.exports = Events;