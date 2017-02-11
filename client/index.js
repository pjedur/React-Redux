import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from "./store/store";
import App from './containers/App';

var initialState = {
  counter: 0
}

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
