var webpack = require("webpack"),
    path = require("path");

var srcPath = path.join(__dirname, "/src/"),
    distPath = path.join(__dirname, "/dist/");

module.exports = {
    watch: true,
    cache: true,
    devtool: '#cheap-module-eval-source-map',
    context: srcPath,
    entry: {
        app: './app.js',
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
        publicPath: "/assets"
    },
    resolve: {
        modules: ["node_modules"],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};