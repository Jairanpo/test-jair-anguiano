import express from 'express';
import path from 'path';
import React from 'react';
import ReactDom from 'react-dom/server';

/* import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../config/webpack.config.server'; */

import App from '../client/components/app';

/*-------------------------------------------------------------------*/

const app = express();
/* var compiler = webpack(webpackConfig); */

app.use(
  express.static(
    path.join(
      __dirname,
      '..',
      '..',
      'dist',
      'public'
    )
  )
);

/* app.use(
  webpackDevMiddleware(compiler, webpackConfig)
);

app.use(webpackHotMiddleware(compiler)); */

app.get('/', (req, res) => {
  const root = (
    <html>
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
        ></script>
      </head>
      <body>
        <div id="root">
          <App />
        </div>

        <script src="/bundle.js"></script>
      </body>
    </html>
  );
  const html = ReactDom.renderToString(root);

  res.send(html);
});

app.listen(3000, () => {
  console.log(
    'server started: http://localhost:3000'
  );
});
