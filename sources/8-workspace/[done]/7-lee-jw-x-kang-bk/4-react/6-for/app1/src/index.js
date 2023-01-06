import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 가상DOM을 끔
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
