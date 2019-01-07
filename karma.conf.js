let testWebpackConfig = require('./build/webpack.test.conf.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'test/**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: testWebpackConfig,

    reporters: ['spec'],

    browsers: ['Chrome']
  })
}

