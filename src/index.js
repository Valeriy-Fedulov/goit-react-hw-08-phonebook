import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import store from './redux/store';
import { myAction } from './redux/actions';

console.log(store.dispatch(myAction));
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
