const path = require('path')
const webpack = require('webpack')
const config = require('../config/index.js')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

// ����һ����ݺ���
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
      // {
      //   test: /\.(sc|c)ss$/,
      //   use: [
      //     // ��css��ʽ����Ϊһ��style��ǩ�����뵽head��ǩ��
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.(c|s)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { 
              // ָ����css-loader֮ǰʹ�õ�loader����
              importLoaders: 1,
              // ���� CSS Modules
              modules: true,
              // �Զ������ɵ�����
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
    // ��HMR���ʹ�ã����ȼ���ʱֱ�ӷ��ظ����ļ������������ļ���id
    namedModules: true,
    // ������������ô���������ʹ�øò�����Ա�֤�����Դ����������
    noEmitOnErrors: true
  }
})

module.exports = devWebpackConfig