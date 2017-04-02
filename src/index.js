import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import PrivateRoute from './components/Protected';
import {fb} from './db';
import reducers from './reducers';

import App from './App';
import './index.css';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(middleware)),
);

function requireAuth(nextState, replace) {
  const user = localStorage.getItem('firebase:authUser:AIzaSyA0kE4u26LNCIv8Fkm8AQmJvrXAavT2YAU:[DEFAULT]');
  console.log(user);
  if (!user) {
    replace({ pathname: '/login' })
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/app" component={App} />
        <PrivateRoute path="/admin" component={App} onEnter={requireAuth} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
