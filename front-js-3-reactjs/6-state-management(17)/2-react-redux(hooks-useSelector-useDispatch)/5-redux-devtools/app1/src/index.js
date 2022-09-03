import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'
// Redux 개발자도구 임포트
import { composeWithDevTools } from 'redux-devtools-extension' 

// composeWithDevTools를 사용하여 Redux 개발자 도구 활성화
const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
