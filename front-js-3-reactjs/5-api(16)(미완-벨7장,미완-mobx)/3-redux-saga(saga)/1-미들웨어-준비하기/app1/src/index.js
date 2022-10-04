import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
// 프로젝트에 리덕스를 적용 1 : Provider와, 만든 rootReducer를 임포트한다.
import { Provider } from 'react-redux'
import rootReducer from './modules'

// 프로젝트에 리덕스를 적용 2 : 루트리듀서를 인자값으로 새로운 스토어를 만든다.
const store = createStore(rootReducer)

ReactDOM.render(
  // 프로젝트에 리덕스를 적용 3 : Provider를 사용해서 프로젝트에 적용한다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
