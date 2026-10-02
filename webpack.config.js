const distDir = __dirname + '/dist/five-point-zero';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestVersionSyncPlugin = require('webpack-manifest-version-sync-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        'styles/default.css': './src/scss/default.scss'
    },

    output: {
        path: distDir,
        filename: '.Trashes',
    },

    // Keep the generated CSS readable rather than minified.
    optimization: {
        minimize: false,
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
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
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                style: 'expanded',
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: '[name]',
        }),

        new StyleLintPlugin({
            configFile: '.stylelintrc.yml',
            files: '**/*.scss',
            failOnError: false,
            quiet: false,
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
