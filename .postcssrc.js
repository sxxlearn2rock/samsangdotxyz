module.exports = {
  plugins: {
    'postcss-import': {},
    // 'precss': {},
    'rucksack-css': {},
    'postcss-preset-env': {},
    // mixins 要在advanced-variables和nested之前引入
    'postcss-mixins': {},
    'postcss-advanced-variables': {},
    'postcss-nested': {},
    'postcss-color-function': {}
    // 'cssnano': {}
  }
}