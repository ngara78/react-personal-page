const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src')
};

module.exports = {
    entry: path.join(paths.SRC, 'index.js'),
    output: {
        path: paths.DIST,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000,
                    },
                },
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash:8].[ext]',
                        },
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
    ],
    stats: {
        colors: true
    },
};
