// 2. 루트리듀서
import counter from "./counter"
import movies from "./movies"
import news from "./news"
import todos from "./todos"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  counter,
  movies,
  news,
  todos,
})

export default rootReducer
