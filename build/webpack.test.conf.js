const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')

const testWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: '#eval-source-map',
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
})

// 测试不需要app入口
delete testWebpackConfig.entry
// test时不需要split代码
delete testWebpackConfig.optimization

module.exports = testWebpackConfig