import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 1. 미들웨어를 임포트한다.
import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// 2. 미들웨어를 적용하는 함수 applyMiddleware를 redux로부터 임포트한다.
import { applyMiddleware, createStore } from "redux";

import { Provider } from "react-redux";
import rootReducer from "./modules";

const store = createStore(
  rootReducer,
  // 3. 미들웨어 적용
  applyMiddleware(logger)
  // composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
