/** root reducer 정의 */
import counter from "./counter" // 리듀서 임포트
import { combineReducers } from "redux" // combineReducers 임포트 (리덕스에서)

// 리듀서들을 합친 것을 rootReducer에 담아서 export
const rootReducer = combineReducers({
  counter,
})

export default rootReducer
