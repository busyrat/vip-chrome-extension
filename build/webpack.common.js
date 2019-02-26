const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: './index.tsx',
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
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            buildHash: new Date().getTime(),
            template: '../index.html'
        })
    ]
}