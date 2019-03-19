require('bootstrap/dist/css/bootstrap.css');
require('css-toggle-switch/dist/toggle-switch.css');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import "./style.css";

const store = configureStore();
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
