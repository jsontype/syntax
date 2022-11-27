import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/** CPR 임포트 : createStore, Provider, rootReducer */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

/** 스토어생성 : 파라미터에 루트리듀서 넣어서 연결 */
const store = createStore(rootReducer);
// console.log(store.getState()) // store 조회하는 방법

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /** 프로바이더로 감싸기 : App이 스토어를 사용할 수 있게 연결 */
  <Provider store={store}>
    <App />
  </Provider>
);
