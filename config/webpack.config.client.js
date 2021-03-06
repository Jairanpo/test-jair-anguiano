const path = require('path');

/*============================================================================*/

var config = {
  mode: 'development',

  context: path.resolve(
    __dirname,
    '..',
    'src/client'
  ),

  entry: {
    app: './index.js',
  },

  output: {
    publicPath: '/',
    path: path.resolve(
      __dirname,
      '..',
      'dist',
      'public'
    ),
    filename: 'bundle.js',
  },
  devServer: {
    overlay: true,
  },

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      /*     .     .     .     .     .     */

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      /*     .     .     .     .     .     */
    ],
  },

  devtool: 'inline-source-map',
};

/*============================================================================*/

module.exports = config;
