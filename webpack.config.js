//path = require('path');
//var fs = require('fs');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
//var WebpackOnBuildPlugin = require('on-build-webpack');

module.exports = {
    context: __dirname,
    entry: {
        'styles/default.css': './src/scss/default.scss'
    },
    output: {
        filename: '.Trashes'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader?minimize=false', 'sass-loader?outputStyle=expanded'])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader?minimize=false')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name]', {
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                context: 'src/templates',
                from: '**/*',
            }
        ]),
//        new WebpackOnBuildPlugin(function(stats) {
//            console.log(stats);
//var stat_out = JSON.stringify(module, '_', 4);
//fs.writeFile('helloworld.txt', stat_out);
//fs.unlinkSync('wqqwqwq');
//        }),
    ]
};
