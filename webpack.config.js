const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const { BannerPlugin } = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    background: './background.js',
    'popup/main': './popup/main.js',
    'content-scripts/js/paid-results': './content-scripts/js/paid-results.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin([
      { from: 'manifest.json', to: 'manifest.json' },
      { from: 'rules.json', to: 'rules.json' },
      { from: 'popup', to: 'popup', ignore: ['*.js'] },
      { from: 'content-scripts/css', to: 'content-scripts/css' },
    ]),
    new BannerPlugin(fs.readFileSync('./LICENSE', 'utf8')),
  ],
};
