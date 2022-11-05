import { combineReducers } from 'redux'
import counter from './counter'

/* 루트 리듀서를 사용해 리듀서 하나로 합치기 */
const rootReducer = combineReducers({
    counter,
})

export default rootReducer
