const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  context: __dirname + '/src',
  entry: {
    background: './background.js',
    'js/popup': './js/popup.js',
    'js/paid-results': './js/paid-results.js',
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
  optimization: {
    minimize: false,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'manifest.json', to: 'manifest.json' },
      { from: 'rules.json', to: 'rules.json' },
      { from: 'pages', to: 'pages' },
      { from: 'css', to: 'css' },
    ]),
  ],
};
