import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import App from './App';
import registerServiceWorker from './service-worker-registration';
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
