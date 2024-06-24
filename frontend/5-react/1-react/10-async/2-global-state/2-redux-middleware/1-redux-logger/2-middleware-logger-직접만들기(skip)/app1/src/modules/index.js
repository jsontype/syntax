import { combineReducers } from 'redux'
import counter from './counter'

// 루트리듀서 생성 : 지금은 서브리듀서가 counter 하나밖에 없는 상황이지만, 나중에 몇개 더 만들 것이다.
const rootReducer = combineReducers({ counter })

export default rootReducer
