import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
// BrowserRouter 컴포넌트를 임포트
import { BrowserRouter } from 'react-router-dom'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)
ReactDOM.render(
  // BrowserRouter로 Provider를 감싸주면, Routing을 사용할 수 있다.
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
