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
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/tweets.txt');
  xhr.responseType = 'text';

  xhr.onload = () => {
    store.dispatch(Action.fetchLastTweet(xhr.response));
  };

  xhr.onerror = () => {
    console.log('count\'t fetch resource!');
  };

  xhr.send();
}, 3000);
