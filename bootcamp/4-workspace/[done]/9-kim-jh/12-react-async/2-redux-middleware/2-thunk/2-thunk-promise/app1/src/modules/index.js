/** 루트리듀서 정의 */
import counter from "./counter";
import posts from "./posts";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  posts,
});

export default rootReducer;
