// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use `react-dom/client` for React 18 and later
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
