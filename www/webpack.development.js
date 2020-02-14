const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mergeUnique = merge({
    customizeArray: merge.unique(
        'plugins',
        ['HtmlWebpackPlugin'],
        plugin => plugin.constructor && plugin.constructor.name
    )
});

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 9001,
        publicPath: process.env.PUBLIC_PATH || '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.twig'),
            chunks: ['main']
        }),
    ],
};

module.exports = mergeUnique(devConfig, baseConfig);
