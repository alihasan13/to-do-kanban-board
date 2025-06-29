// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// GlobalStyles is now included within App.js via ThemeProvider or directly

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
