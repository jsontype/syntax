import { combineReducers } from 'redux'
import counter from './counter'
import posts from './posts'

// 루트리듀서 생성 : 지금은 서브리듀서가 counter, posts 두개가 되었다.
const rootReducer = combineReducers({ counter, posts })

export default rootReducer
