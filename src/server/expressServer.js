import express from 'express';
import path from 'path';
import React from 'react';
import ReactDom from 'react-dom/server';
import App from '../client/components/app';
import createRandomUser from './createRandomUser';

/*============================================================================*/

const app = express();

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

/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

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

/*   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .  .  .  .  .  . */

app.get('/api/email', (req, res) => {
  let userOne = createRandomUser();
  let userTwo = createRandomUser();
  res.json([userOne, userTwo]);
});

/*============================================================================*/

app.listen(3000, () => {
  console.log(
    'server started: http://localhost:3000'
  );
});
