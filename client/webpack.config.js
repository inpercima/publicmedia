const CopyWebpackPlugin = require('copy-webpack-plugin');

const invertedMode = process.env.NODE_ENV === 'prod' ? 'dev' : 'prod';
module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: '../api',
        to: './api',
        globOptions: {
          ignore: ['**/config.default.php', `**/config.${invertedMode}.php`, '**/README.md'],
        },
      }],
    }),
  ],
}
