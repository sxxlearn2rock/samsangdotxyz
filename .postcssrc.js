module.exports = {
  plugins: {
    'postcss-import': {},
    // 'precss': {},
    'postcss-preset-env': {},
    // mixins 要在simple-vars和nested之前引入
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    // 'cssnano': {}
  }
}