var fs = require('fs');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackOnBuildPlugin = require('on-build-webpack');

module.exports = {
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: false, importLoaders: 2 } },
                        { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
                        { loader: 'sass-loader', options: { outputStyle: 'expanded' } }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: false, importLoaders: 1 } },
                        { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } }
                    ]
                })
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
        new WebpackOnBuildPlugin(function(stats) {
            // Delete `output.filename`
            try {
                fs.unlinkSync(this.outputPath+'/'+this.options.output.filename);
            } catch(e) {
            }

            // AutoBuild/Repair `manifest.json` from `package.json`, if some parameters are missing or `manifest.json` not exist
            var pkg = require(this.context+'/package.json');
            try {
                var manifest = require(this.outputPath+'/manifest.json');
            } catch(e) {
                var manifest = {};
            }

            var manifest2 = {
                "title":        manifest.title          || pkg.title        || pkg.name,
                "txp-type":     manifest['txp-type']    || pkg['txp-type']  || "textpattern-theme",
                "version":      manifest.version        || pkg.version      || "0.0.1",
                "description":  manifest.description    || pkg.description  || "",
                "author":       manifest.author         || pkg.author       || "Team Textpattern",
                "author_uri":   manifest.author_uri     || pkg.homepage     || pkg.repository.url   || ""
            };
            fs.writeFile(this.outputPath+'/manifest.json', JSON.stringify(manifest2, null, 2));
        }),
    ]
};
