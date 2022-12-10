import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/** 프로바이더 제공하기 위한 임포트 */
import rootReducer from "./modules";
import { createStore } from "redux";
import { Provider } from "react-redux";

/** 스토어 만들기 */
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /** Provider를 통해, 스토어를 리액트 앱에 제공하기 */
  <Provider store={store}>
    <App />
  </Provider>
);
