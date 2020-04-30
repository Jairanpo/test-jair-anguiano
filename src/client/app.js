import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import EmailDashboard from './emailDashboard';

/*-----------------------------------------------------------------*/

ReactDom.render(
  <AppContainer>
    <EmailDashboard />
  </AppContainer>,
  document.getElementById('react-root')
);

if (module.hot) {
  module.hot.accept('./emailDashboard.js', () => {
    const newEmailDashboard = require('./emailDashboard.js')
      .default;
    render(newEmailDashboard);
  });
}
