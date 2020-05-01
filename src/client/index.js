import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import './components/AppStyles.sass';
import './components/EmailDashboardStyles.sass';

const app = <App />;

ReactDom.hydrate(
  app,
  document.getElementById('root')
);
