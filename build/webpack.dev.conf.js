const path = require('path')
const webpack = require('webpack')
const config = require('../config/index.js')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

// 设置一个便捷函数
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.dev.devtool,
  devServer: {
    // contentBase: config.build.assetsRoot,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    compress: true,
    clientLogLevel: 'warning',
    open: config.dev.autoOpenBrowser,
  },
  module: {
    rules: [
      {
        test: /\.(c|s)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { 
              // 指明在css-loader之前使用的loader数量
              importLoaders: 1,
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: resolve('static'),
    //     to: config.dev.assetsSubDirectory,
    //     ignore: ['.*']
    //   }
    // ])
  ],
  optimization: {
    // 与HMR配合使用，在热加载时直接返回更新文件名，而不是文件的id
    namedModules: true,
    // 如果编译出错，那么跳过输出，使用该插件可以保证输出资源不包含错误
    noEmitOnErrors: true
  }
})

module.exports = devWebpackConfig