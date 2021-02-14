const CopyWebpackPlugin = require('copy-webpack-plugin');

// issue: https://github.com/meltedspark/angular-builders/issues/235
// explanation: https://github.com/meltedspark/angular-builders/issues/235#issuecomment-464393504
// workaround: https://github.com/meltedspark/angular-builders/issues/235#issuecomment-471323007
module.exports = (config, options) => {
  const invertedMode = process.env.NODE_ENV === 'prod' ? 'dev' : 'prod';
  config.plugins.push(
    new CopyWebpackPlugin([{
      from: '../api',
      to: './api',
      ignore: ['config.default.php', `config.${invertedMode}.php`, 'README.md'],
    }])
  );
  return config;
}
