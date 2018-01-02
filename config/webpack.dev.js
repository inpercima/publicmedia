'use strict';

let commonConfig = require('../webpack.common.js');
let webpack = require('webpack');
let webpackMerge = require('webpack-merge');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  devServer: {
    // to open the local server in browser
    contentBase: __dirname + '/build',
  },
  plugins: [
    // tell angular to be in development mode
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
      },
   }),
  ],
});
