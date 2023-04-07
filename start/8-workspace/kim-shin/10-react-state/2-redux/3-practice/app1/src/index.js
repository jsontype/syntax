import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// 3. 스토어 만들기
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./modules"
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // 4. Provider에 store prop을 준 뒤, App 감싸기
  <Provider store={store}>
    <App />
  </Provider>
)
