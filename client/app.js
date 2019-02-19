import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import '../public/index.css'

ReactDOM.render(
  <Provider store={store}>
  {<div>hi</div>}
  </Provider>,
  document.getElementById('app')
);