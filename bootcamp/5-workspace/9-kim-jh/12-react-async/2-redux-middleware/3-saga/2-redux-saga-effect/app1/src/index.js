import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
// 6. 리덕스 사가를 도입하기 위한 함수 임포트
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./modules";

// 7. saga 미들웨어 생성
const saga = createSagaMiddleware();

// 스토어에 applyMiddleware를 넣어서 미들웨어를 적용한다.
const store = createStore(
  // 루트리듀서 적용 : 한개의 루트리듀서를 적용한다.
  rootReducer,
  // 미들웨어 적용 : ReduxThunk, logger를 적용한다. // 8. saga 적용
  composeWithDevTools(applyMiddleware(ReduxThunk, saga, logger))
  // 미들웨어 추가 가능 : 이 밑으로, 여러개의 미들웨어를 추가 적용할 수도 있다.
  // composeWithDevTools(applyMiddleware(다른 미들웨어함수))
);

// 9. saga 적용
saga.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
