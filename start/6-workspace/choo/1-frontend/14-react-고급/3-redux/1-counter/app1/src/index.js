import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// 3. CPR 임포트 : createStore, Provider, rootReducer
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./modules"

// 4. 스토어 생성
const store = createStore(rootReducer)
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // 5. 프로바이더를 통해 스토어를 리액트 앱에 연동
  <Provider store={store}>
    <App />
  </Provider>
)
