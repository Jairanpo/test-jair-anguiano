const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*-----------------------------------------------------------------*/

var config = {
  mode: 'development',
  entry: {
    main: [
      './src/main.js',
      'webpack-hot-middleware/client?reload=true',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      /*.................................................................*/

      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      /*.................................................................*/
      {
        test: /\.html$/,
        use: [],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
    }),
  ],
};

/*=================================================================*/
module.exports = config;
