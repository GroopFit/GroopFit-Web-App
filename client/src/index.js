import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import AppRouter from './AppRouter';
import './index.css';
//import dotenv from  'dotenv'
//import path from 'path'

//import dotenv from 'dotenv'
//dotenv.config({ path: `../.env` })

//import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import * as authAPI from './app/services/user/authAPI';

/**
 * Intercepts requests made by axios and responds accordingly.  
 * @param {Function} successFunction function that takes in success object and makes any changes to request if necessary
 * @param {Function} errorFunction function that takes in error object
*/
axios.interceptors.request.use(
  // 2xx Response
  successfulReq => successfulReq,
  (err) => {
      return Promise.reject(err);
  }
);

/**
 * Intercepts responses made by axios and responds accordingly.  
 * @param {Function} successFunction function that takes in success object and makes any changes to response if necessary
 * @param {Function} errorFunction function that takes in error object and retries request when response returns 403 error
*/
axios.interceptors.response.use(
  // 2xx Response - return response

  response => response,
  (err) => {
      const { config, message } = err;
      console.log("interceptor activated!");

      if (!config || !config.retryCt) {
          return Promise.reject(err);
      }

      if (err.response.status === 403) { 
          //thunkAPI.dispatch(authAPI.refreshAccessTokenAsync());
          config.retryCt -= 1;
          console.log("retrying reqs... retry ct at " + config.retryCt);
          const retryReq = new Promise((resolve) => {
              setTimeout(() => {
                  resolve();
              }, config.retryTimeout || 1000);
          });
          return retryReq.then(() => axios(config));
      }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
);