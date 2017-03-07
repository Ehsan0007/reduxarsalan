import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Main from "./container/signup"
import {Provider} from "react-redux"
import {store} from "./store/store"

ReactDOM.render(
  <Provider store={store}>
  <Main />
  </Provider>,
  document.getElementById('root')
);
