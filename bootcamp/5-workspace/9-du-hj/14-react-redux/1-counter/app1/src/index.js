import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/** 루트리듀서 연결 */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);
// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
