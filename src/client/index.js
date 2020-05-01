import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import './sass/main.sass';

const app = <App />;

ReactDom.hydrate(
  app,
  document.getElementById('root')
);
