import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import posts from "./posts";
// 4. 루트 사가 만드는 all 함수 임포트
import { all } from "redux-saga/effects";

// 루트리듀서 생성 : 지금은 서브리듀서가 counter, posts 두개가 되었다.
const rootReducer = combineReducers({ counter, posts });

// 5. 루트사가 생성
export function* rootSaga() {
  yield all([counterSaga()]); // all은 배열 안의 여러 사가를 동시에 실행시켜준다.
}

export default rootReducer;
