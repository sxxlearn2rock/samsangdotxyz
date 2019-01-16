'use strict'

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {},
    devtool: 'cheap-module-eval-source-map',
    // host: 'localhost',
    host: 'dev.learn.oa.com',
    port: '8998',
    autoOpenBrowser: false,
  },

  build: {
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    bundleAnalyzerReport: true
  }
}