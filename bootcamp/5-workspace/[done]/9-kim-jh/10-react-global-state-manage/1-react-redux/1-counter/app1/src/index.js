import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/** 임포트하기 */
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'

/** 스토어 만들기 : createStore 함수의 파라미터에 루트리듀서 넣기 */
const store = createStore(rootReducer) // console.log(store.getState()) // store 조회하는 법

ReactDOM.render(
  // Provider로 store를 넣어서 App을 감싸게 되면(nesting 하면),
  // App 컴포넌트에 속한 모든 컴포넌트에서 리덕스 스토어에 접근 할 수 있게 된다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
