// We use HtmlWebpackPlugin to copy index.html from app to dist
// (for distribution)

const path = require('path');

// to bundle css in public/
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// to copy files to public/
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/app');
const CLIENT_DIR = path.resolve(__dirname, 'src');

module.exports = {
    debug: true,
    devtool: '#inline-source-map',
    entry: {
        jsx: [`${APP_DIR}/index.jsx`],
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            // For jsx files
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel',
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!stylus-loader'
                ),
            },
        ],
    },
    resolve: { // extensions for require/import,we can omit .js and .jsx
        extensions: ['', '.js', '.jsx', '.styl'],
    },
    plugins: [
        new CopyWebpackPlugin([
            // copy our html files
            { from: `${CLIENT_DIR}/index.html` },
            // copy our assets
            {
                from: `${APP_DIR}/assets`,
                to: `${BUILD_DIR}/assets`,
                toType: 'dir',
            },
        ]),
        // bundle all css
        new ExtractTextPlugin('bundle.css', { allChunks: true }),
    ],
};
