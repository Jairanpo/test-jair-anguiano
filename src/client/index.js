import React from 'react';
import ReactDom from 'react-dom';
import './sass/main.sass';

import App from './components/App';

/*-----------------------------------------------------------------*/

ReactDom.hydrate(
  <App />,
  document.getElementById('root')
);
