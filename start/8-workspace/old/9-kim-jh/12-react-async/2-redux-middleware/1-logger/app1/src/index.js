import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/** CPR */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

/** 1. 미들웨어 적용 함수 임포트 */
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

/** 2. 스토어에 applyMiddleware */
const store = createStore(
  rootReducer,
  // applyMiddleware(logger)
  composeWithDevTools(applyMiddleware(logger))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /** 프로바이더로 감싸기 */
  <Provider store={store}>
    <App />
  </Provider>
);
