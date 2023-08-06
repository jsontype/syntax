import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// 미들웨어를 적용하는 함수 applyMiddleware를 임포트한다.
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'
import myLogger from './middlewares/myLogger'

// 스토어에 applyMiddleware를 넣어서 미들웨어를 적용한다.
const store = createStore(rootReducer, applyMiddleware(myLogger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
