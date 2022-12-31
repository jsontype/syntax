import { combineReducers } from "redux";
import todos from "./todos";

const rootRedcuer = combineReducers({
  todos,
});

export default rootRedcuer;
