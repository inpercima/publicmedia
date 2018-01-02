'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // external created files with there imports
  entry: {
    'app': './client/main.ts',
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
  },
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: '[name].[hash].js',
  },
  // no extension in imports in *.ts files needed
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },
  plugins: [
    // create index.html and inject js and css files
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
    // separate css code, [name] is the chunk name of entry
    new ExtractTextPlugin('[name].[hash].css'),
    // Workaround for angular/angular#20357 (WARNING in ./node_modules/@angular/core/esm5/core.js)
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      // new with angular 5, before /angular(\\|\/)core(\\|\/)@angular/,
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.resolve(__dirname + '/client')
    ),
    // separate js code, webpack is not smart enough to keep the vendor/polyfills code out of the app.js
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills', 'vendor'],
    }),
    // clean output before build
    new CleanWebpackPlugin(path.resolve(__dirname + '/build'), {}),
    new CopyWebpackPlugin([
      {
        from: './config/config.json',
      },
      {
        from: './server',
      },
    ]),
    // tell angular the theme from material build-in themes
    new webpack.DefinePlugin({
      'process.env': {
        'THEME': JSON.stringify(require("./config/config.json").theme),
      },
   }),
  ]
};
