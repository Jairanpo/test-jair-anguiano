const path = require('path');

/*-----------------------------------------------------------------*/

var config = {
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
            options: {
              attributes: false,
            },
          },
        ],
      },
    ],
  },
};

/*=================================================================*/
module.exports = config;
