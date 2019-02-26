const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }, {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }, {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 5000,
                    name: 'images/[name].[ext]?[hash:8]'
                }
            }, {
                test: /\.(eot|ttf|woff|woff2|otf)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 5000,
                    name: 'fonts/[name].[ext]?[hash:8]'
                }
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin([
            { from: './src/static', to: './' }
        ])
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}