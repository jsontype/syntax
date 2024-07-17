import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//store
import { Provider } from 'react-redux';
//reducer
import Store from './store'

ReactDOM.render(
  <React.Fragment>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={Store}>
            <App />
        </Provider>
      </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
