import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/** CPR 임포트 : Provider로 감싸기 전에 필요한 함수들 */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
