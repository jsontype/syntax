import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 미들웨어를 적용하는 함수 applyMiddleware를 임포트한다.
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// 스토어에 applyMiddleware를 넣어서 미들웨어를 적용한다.
const store = createStore(
  // 1. 루트리듀서 적용 : 한개의 루트리듀서를 적용한다.
  rootReducer,

  // 2. 미들웨어 적용 : applyMiddleware(미들웨어함수)를 스토어에 넣으면 적용할 수 있다.
  // applyMiddleware(logger) // 여기서 logger는 직접 만든 미들웨어가 아니라, Redux-logger 라이브러리에서 가져온 미들웨어 함수이다.

  // 3. 미들웨어에 데브툴즈 적용 : applyMiddleware(미들웨어함수)를 composeWithDevTools로 감싸면 해당 미들웨어에 DevTools를 적용할 수 있다.
  composeWithDevTools(applyMiddleware(logger))

  // 4. 미들웨어 추가 가능 : 이 밑으로, 여러개의 미들웨어를 추가 적용할 수도 있다.
  // composeWithDevTools(applyMiddleware(다른 미들웨어함수))
) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
