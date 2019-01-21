const path = require('path')
const webpack = require('webpack')
const config = require('../config/index.js')
const baseWebpackConfig = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
// 每次构建前删除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 用于提取css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 用于压缩提取出的css文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// 生成打包报告
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 设置一个便捷函数
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const prodWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.build.devtool,
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // 指明在css-loader之前使用的loader数量
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([resolve('dist')], {
      // 设置工程根目录，否则由于配置文件与dist文件夹不在同一目录下，导致插件失效
      root: resolve('/')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css?v=[contenthash]'
    })
  ],
  optimization: {
    minimizer: [
      // 压缩提取出来的css文件
      new OptimizeCSSAssetsPlugin({
        //注意不要写成 /\.css$/g
        assetNameRegExp: /\.css\.*(?!.*map)/g,  
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ]
  }
})

if (config.build.bundleAnalyzerReport) {
  prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: 8999
  }))
}

module.exports = prodWebpackConfig