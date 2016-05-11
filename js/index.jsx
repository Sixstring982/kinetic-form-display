import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Reducers from './reducers/';
import App from './components/App.jsx';
import * as Action from './actions';

const store = createStore(Reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

setInterval(() => {
  fetch('/tweets.txt')
    .then(r => r.text())
    .then(r => {
      store.dispatch(
        Action.fetchLastTweet(r)
      );
    });
}, 3000);
