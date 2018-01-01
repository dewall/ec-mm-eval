var webpack = require("webpack"),
    path = require("path");

// webpack plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin");

var srcPath = path.join(__dirname, "/src/"),
    distPath = path.join(__dirname, "/dist/");

module.exports = {
    devtool: 'cheap-module-source-map',

    entry: {
        polyfills: path.resolve(srcPath, "polyfills.ts"),
        app: [
            path.resolve(srcPath, "main.ts"),
            path.resolve(srcPath, "main.scss")
        ]
    },

    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
    },

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    },

    resolve: {
        // modules: ["node_modules", "src"],
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader?silent=true', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                exclude: path.resolve(srcPath, 'index.html')
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
                exclude: path.resolve(srcPath, 'components')
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader'],
                include: path.resolve(srcPath, 'components')
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader'],
                include: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=assets/[name].[ext]'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            "[name].css"
        ),
        new HtmlWebpackPlugin({
            template: path.resolve(srcPath, 'index.html'),
            inject: true
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            srcPath
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),
        new webpack.NoEmitOnErrorsPlugin(

        ),
        new CopyWebpackPlugin([{
            from: srcPath
        }])
    ]
};