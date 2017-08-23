'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // external created files with there imports
  entry: {
    'app': './src/main.ts',
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
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
      template: 'src/index.html',
    }),
    // separate css code, [name] is the chunk name of entry
    new ExtractTextPlugin('[name].[hash].css'),
    // Workaround for angular/angular#11580 (WARNING in ./~/@angular/core/@angular/core.es5.js)
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname + '/src')
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
        from: './src/server/handler.php',
      },
      {
        from: './src/server/instagram.service.php',
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
