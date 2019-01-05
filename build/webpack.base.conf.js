'use strict'
// 导入node的path模块
const path = require('path')
const config = require('../config/index.js')
const vueLoaderConfig = require('./vue-loader.conf.js')
const { VueLoaderPlugin } = require('vue-loader')
// 用于复制index.html并插入打包后的文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 设置一个便捷函数
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    'user/app': resolve('src/user/index.js')
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name]_budle_[hash:10].js',
    // 资源路径前缀
    // publicPath: devMode ? 
    //             config.dev.assetsPublicPath :
    //             config.build.assetsPublicPath
    publicPath: '/'
  },
  resolve: {
    // extensions: ['.js', '.vue', '.json'],
    // 设置路径的别名
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: resolve('src'),
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve('src'),
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        include: resolve('src')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 30k以下的图片用url-loader加载
          limit: 1024*30,
          // 否则采用file-loader，它采用与url-loader的options
          fallback: 'file-loader',
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
          name: 'asset/image/[name]_[hash:7].[ext]'
        }
      },
      // {
      //   test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //   }
      // },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //   }
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
    {
      template: resolve('src/user/index.html'),
      filename: 'user/index.html',
      inject: true,
      // chunks:['user/app', 'vendors']
    }),
  ],
  optimization: {
    // 代码分割
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          minChunks: 1,
          // 该chunk的名字，用于HtmlWebpackPlugin引入chunk
          name: 'vendors'
        }
      }
    }
  }
}