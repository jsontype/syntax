/** 루트리듀서함수 정의 */
import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
