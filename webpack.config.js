const whitelister = require('purgecss-whitelister');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const glob = require("glob");

module.exports = {

  plugins: [

    new PurgecssPlugin({
      keyframes: false,
      paths: glob.sync('src/**/*', {
        nodir: true
      }),
      whitelist: whitelister('bootstrap/dist/css/bootstrap.css')
    }),
  ],
}