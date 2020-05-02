import React from 'react';
import EmailDashboard from './EmailDashboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

/*-----------------------------------------------------------------*/

const store = createStore(rootReducer);

function App(props) {
  return (
    <Provider store={store}>
      <div className="app">
        <EmailDashboard />
      </div>
    </Provider>
  );
}

App.defaultProps = {};

export default App;
