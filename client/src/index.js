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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
);