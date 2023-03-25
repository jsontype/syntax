import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "modules"
import i18n from "./i18n"

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App i18n={i18n} />
    </BrowserRouter>
  </Provider>
)
