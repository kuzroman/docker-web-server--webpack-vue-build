const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        app: ['@babel/polyfill', 'url-search-params-polyfill', './src/index.js'] // add babel polyfills for main app
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin,
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } },
            })
        ]
    },
    module: {
        rules: [
            // Enable babel in production
            {
                test: /\.js$/,
                exclude: [/node_modules/, /src\/preloader\//],
                loader: 'babel-loader'
            }
        ]
    }
});
