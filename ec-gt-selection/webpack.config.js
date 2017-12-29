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
        app: './app.ts',
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
        publicPath: "/assets"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader" },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader' }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};