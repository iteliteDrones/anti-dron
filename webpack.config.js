const glob = require('glob');
const PurgeCSSPlugin = require('@fullhuman/postcss-purgecss')

module.exports ={
  plugins: [
    new PurgeCSSPlugin({ paths: glob.sync('./src/**/*.html', { nodir: true }) })
  ],
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  }
};