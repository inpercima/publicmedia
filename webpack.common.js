const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TSLintPlugin = require('tslint-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.ts',
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        test: /\.ts?$/,
      },
      {
        loader: 'html-loader',
        test: /\.html$/,
      },
      {
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
        test: /\.css$/,
      },
      {
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            publicPath: 'assets/'
          },
        }],
        test: /\.(png|svg|jpe?g|gif|woff|woff2|eot|ttf|otf)$/,
      },
      {
        loader: 'csv-loader',
        test: /\.(csv|tsv)$/,
      },
      {
        loader: 'xml-loader',
        test: /\.xml$/,
      },
    ]
  },
  optimization: {
    splitChunks: {
      // check HtmlWebpackPlugin.chunksSortMode
      chunks: "all",
    }
  },
  output: {
    filename: '[name].[chunkhash].js',
    // the output directory is as absolute path required
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // clean output before build
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: './src/main',
    }]),
    // separate css from js
    new MiniCssExtractPlugin({
      chunkFilename: "[id].css",
      filename: "[name].css",
    }),
    // use index.html as template to include js and css
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      // reverse alphabetical order to real use optimization.splitChunks.chunks: all
      chunksSortMode: function (a, b) {
        if (a.names[0] > b.names[0]) {
          return -1;
        }
        if (a.names[0] < b.names[0]) {
          return 1;
        }
        return 0;
      }
    }),
    // linting after build process
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    }),
    // WORKAROUND to avoid warnings from angular at build time
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      // new with angular 5, before /angular(\\|\/)core(\\|\/)@angular/,
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.resolve(__dirname, 'dist'),
    ),
    // tell angular the theme from material build-in themes
    new webpack.DefinePlugin({
      'process.env': {
        'THEME': JSON.stringify(require("./src/config.json").theme),
      },
    }),
    // helps to split and cache code
    new webpack.HashedModuleIdsPlugin({
      hashDigest: 'hex',
      hashDigestLength: 20,
      hashFunction: 'sha256',
    }),
  ],
  // non extension for *.ts and *.js in imports needed
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
