const merge = require('webpack-merge');
const dev = require('./webpack.dev.js')
const DashboardPlugin = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(dev, {
    plugins: [
        new DashboardPlugin(),
        new BundleAnalyzerPlugin()
    ]
})