const distDir = __dirname + '/dist/four-point-nine';

const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        'styles/default.css': './src/scss/default.scss'
    },
    output: {
        path: distDir,
        filename: '.Trashes'
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS modules.
                    { loader: 'css-loader', options: { importLoaders: 2 } },
                    // Run postCSS actions.
                    { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
                    // Compiles Sass to CSS.
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                outputStyle: 'expanded'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new StyleLintPlugin({
            configFile: '.stylelintrc.yml',
            syntax: 'scss',
            context: 'src/scss',
            files: '**/*.scss',
            failOnError: false,
            quiet: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name]'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: 'src/templates',
                    from: '**/*',
                },
            ],
        }),
    ]
};
