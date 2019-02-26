const merge = require('webpack-merge');
const common = require('./webpack.common.js')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.join(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CopyPlugin([
            { from: '../src/static', to: './' }
        ])
    ]
})