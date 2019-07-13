import { hot } from 'react-hot-loader/root';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './App';

const store = configureStore();
const NewApp = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <NewApp />
  </Provider>,
  document.getElementById('Root')
);
