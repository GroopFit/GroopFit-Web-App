import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import AppRouter from './AppRouter';
import './index.css';
import axios from 'axios';
//import dotenv from  'dotenv'
//import path from 'path'

//import dotenv from 'dotenv'
//dotenv.config({ path: `../.env` })

//import reportWebVitals from './reportWebVitals';

// request interceptor
axios.interceptors.request.use(
  function (successfulReq) {
    return successfulReq;
  },
  function (err) {
    return Promise.reject(err);
  }
);

// response interceptor
axios.interceptors.response.use(
  undefined,
  function retry(err) {
    if (err.response.status === 403) {
      console.log("error " + err);
    }
    return Promise.reject(err);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
);