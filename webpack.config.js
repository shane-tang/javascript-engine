module.exports = {
    entry: "./src/core/game.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },
    mode: 'development'
}