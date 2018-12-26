const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // issue: https://github.com/angular/angular-cli/issues/1548
  // explanation: https://github.com/angular/angular-cli/issues/1548#issuecomment-286151056
  // workaround: https://github.com/angular/angular-cli/issues/1548#issuecomment-427653778
  node: {
    crypto: true,
    stream: true,
  },
  plugins: [ process.env.NODE_ENV !== 'mock' ?
    new CopyWebpackPlugin([{
      from: '../api/src/main',
      to: './api',
    }, {
      from: 'src/favicon.ico',
    }]) : {},
  ],
}
