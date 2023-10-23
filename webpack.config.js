const glob = require('glob');
const PurgeCSSPlugin = require('@fullhuman/postcss-purgecss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], 
      }
    ]
  },
  plugins: [
    new PurgeCSSPlugin({ paths: glob.sync('./src/**/*.html', { nodir: true }) })
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
};