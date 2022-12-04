/** 루트리듀서 정의 */
import counter from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
