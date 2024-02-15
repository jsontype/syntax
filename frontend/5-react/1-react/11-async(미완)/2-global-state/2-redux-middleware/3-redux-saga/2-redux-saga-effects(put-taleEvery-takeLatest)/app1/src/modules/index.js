import { combineReducers } from 'redux'
import counter, { counterSaga } from './counter'
import posts from './posts'
import { all } from 'redux-saga/effects'

// 루트리듀서 생성
const rootReducer = combineReducers({ counter, posts })

// 루트사가 생성
export function* rootSaga () { // 프로젝트에서 여러개의 사가를 만들게 될텐데, 이를 모두 합쳐서 루트 사가를 만든다.
    yield all([counterSaga()]) // all은 배열 안의 여러 사가를 동시에 실행시켜준다.
}

export default rootReducer
