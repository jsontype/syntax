import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// index.js를 임포트할 때는 파일명을 생략해도 된다.
import rootReducer from './modules'
// Redux 개발자도구 임포트
import { composeWithDevTools } from 'redux-devtools-extension' 

/* 스토어 만들기 */
// composeWithDevTools를 사용하여 Redux 개발자 도구 활성화
const store = createStore(rootReducer, composeWithDevTools())
// 스토어의 state를 출력해보자.
console.log(store.getState())
// 브라우져의 콘솔창을 확인해보면, counter, todos 서브 리듀서의 상태가 합쳐져 있다.

ReactDOM.render(
  // Provider로 store를 넣어서 App을 감싸게 되면(nesting 하면),
  // App 컴포넌트에 속한 모든 컴포넌트에서 리덕스 스토어에 접근 할 수 있게 된다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
