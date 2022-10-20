import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

// 스토어에 applyMiddleware를 넣어서 미들웨어를 적용한다.
const store = createStore(
  // 루트리듀서 적용 : 한개의 루트리듀서를 적용한다.
  rootReducer,
  // 미들웨어 적용 : ReduxThunk, logger를 적용한다.
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
  // 미들웨어 추가 가능 : 이 밑으로, 여러개의 미들웨어를 추가 적용할 수도 있다.
  // composeWithDevTools(applyMiddleware(다른 미들웨어함수))
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
