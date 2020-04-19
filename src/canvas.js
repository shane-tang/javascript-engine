module.exports = {
    generateCanvas: function generateCanvas(width, height) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        var ratio = window.devicePixelRatio || 1;

        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        context.setTransform(ratio, 0, 0, ratio, 0, 0)

        return canvas
    }
}