const distDir = __dirname + '/dist/four-point-eight';

const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestVersionSyncPlugin = require('webpack-manifest-version-sync-plugin');
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
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                outputStyle: 'expanded',
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(woff(2)?|svg)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(?:ico|gif|jpe?g|png|svg|webp)$/i,
                type: 'asset/resource',
            },
        ],
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
        new ManifestVersionSyncPlugin({
            manifestPath: 'manifest.json',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: 'src/templates',
                    from: '**/*',
                },
            ],
        }),
    ],
};
