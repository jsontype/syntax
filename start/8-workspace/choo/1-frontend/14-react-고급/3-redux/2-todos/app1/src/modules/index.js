// 2. 루트 리듀서 만들기

// 루트 리듀서 정의
import counter from "./counter"
import todos from "./todos"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  counter,
  todos,
})

export default rootReducer
