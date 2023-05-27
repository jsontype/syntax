import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

/** ★★ CPR 임포트 : createStore, Provider, rootReducer */
import rootReducer from "./modules"
import { createStore } from "redux"
import { Provider } from "react-redux"

/** 스토어 만들기 : createStore 함수의 파라미터에 루트리듀서 넣기 */
const store = createStore(rootReducer) // console.log(store.getState()) // store 조회하는 법

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  /** Provider를 통해, 스토어를 리액트 앱에 제공하기 */
  <Provider store={store}>
    <App />
  </Provider>
)
