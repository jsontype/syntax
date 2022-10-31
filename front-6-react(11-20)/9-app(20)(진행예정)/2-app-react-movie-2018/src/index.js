import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// reactDOM.render()를 통해, component를 호출한다. component는 물론 HTML을 반환하는 함수이다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
