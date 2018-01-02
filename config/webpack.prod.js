'use strict';

let commonConfig = require('../webpack.common.js');
let CompressionPlugin = require('compression-webpack-plugin');
let webpack = require('webpack');
let webpackMerge = require('webpack-merge');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  plugins: [
    // tell angular to be in production mode
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
      },
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$|\.css$/,
      threshold: 1040,
    }),
  ],
});
