const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.twig$/,
                use: {
                    loader: 'twig-loader',
                    options: {
                        // See options section below
                    },
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sc|sa|c)ss$/,
                oneOf: [
                    {
                        use: [
                            MiniCssExtractPlugin.loader,
                            { loader: 'css-loader' },
                            // 'postcss-loader',
                            'sass-loader',
                        ]
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /\.raw\./,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                        }
                    },
                    {
                        loader: 'svgo-loader',
                    },
                    {
                        loader: 'svg-transform-loader',
                    }
                ]
            },
        ],
    },
    devServer: {
        inline: false,
        progress: true,
        disableHostCheck: true,
        compress: true,
        contentBase: [
            path.resolve(__dirname, 'static'),
        ],
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Access-Control-Max-Age": 600
        },
        watchOptions: {
            aggregateTimeout: 1000,
            ignored: /[\\/]node_modules[\\/]/
        }
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[hash:8].css' }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src/templates/index.example.twig'),
        //     chunks: ['main'],
        // }),
        // new ManifestPlugin({
        //     exclude .svg assets since they incorrectly fall under filename index.scss anyway.
        //     filter: file => /\.(js|css|map)$/.test(file.path),
        // }),
        // new webpack.DefinePlugin({
        //     'DADATA_URL': JSON.stringify(process.env.DADATA_URL),
        //     'DADATA_TOKEN': JSON.stringify(process.env.DADATA_TOKEN),
        // })
    ],
};