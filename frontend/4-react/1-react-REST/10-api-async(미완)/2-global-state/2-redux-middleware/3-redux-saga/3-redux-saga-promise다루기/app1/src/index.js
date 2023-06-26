import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
// saga 미들웨어 생성 함수를 임포트
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from './modules'

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware()

// 스토어
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk, // thunk 미들웨어 적용
      sagaMiddleware, // saga 미들웨어 적용
      logger // logger 미들웨어 적용 : logger를 사용하는 경우, logger가 가장 마지막에 와야한다.
    )
  )
) // 여러개의 미들웨어를 적용 할 수 있다.

// 루트 사가 실행
sagaMiddleware.run(rootSaga) // * 주의: 스토어 생성이 된 다음에 이 코드를 실행해야한다.

// 렌더링
ReactDOM.render(
  // BrowserRouter로 Provider를 감싸주면, Routing을 사용할 수 있다.
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
