const path = require('path');
const nodeExternals = require('webpack-node-externals');

/*-------------------------------------------------------------------*/

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, 'src/client'),

  entry: {
    app: './index.js',
  },

  target: 'node',
  externals: nodeExternals(),

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

  devtool: 'inline-source-map',
};
