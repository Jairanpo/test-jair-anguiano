const path = require('path');
/* const nodeExternals = require('webpack-node-externals'); */
const webpack = require('webpack');

/*-------------------------------------------------------------------*/

module.exports = {
  mode: 'development',

  context: path.resolve(
    __dirname,
    '..',
    'src/client'
  ),

  entry: {
    app: './index.js',
  },

  /* target: 'node',
  externals: nodeExternals(), */

  output: {
    publicPath: '/',
    path: path.resolve(
      __dirname,
      'dist',
      'public'
    ),
    filename: 'bundle.js',
  },
  devServer: {},

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      /*...................................................................*/
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      /*...................................................................*/
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devtool: 'inline-source-map',
};
