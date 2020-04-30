const express = require('express');
const path = require('path');

/*-----------------------------------------------------------------*/

const server = express();

/*.................................................................*/

const webpack = require('webpack');
const webpackConfig = require('../../config/webpack.dev');
const webpackCompiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware')(
  webpackCompiler,
  webpackConfig.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(
  webpackCompiler
);

server.use(webpackHotMiddleware);
server.use(webpackDevMiddleware);

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

/*.................................................................*/

server.listen(3000, function serviceStart() {
  console.log('Server is listening');
});
