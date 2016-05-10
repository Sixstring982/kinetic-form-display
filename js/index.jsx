import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Reducers from './reducers/';

const store = createStore(Reducers);

render(
  <Provider store={store}>
    <div className="card gray">
    </div>
  </Provider>,
  document.getElementById('root')
);
