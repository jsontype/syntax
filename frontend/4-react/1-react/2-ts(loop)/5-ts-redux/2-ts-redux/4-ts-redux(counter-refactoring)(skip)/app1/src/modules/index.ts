import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos';

// 루트리듀서 만들기
const rootReducer = combineReducers({
    counter,
    todos
})

// 루트리듀서 익스포트 해두기
export default rootReducer

// 루트리듀서의 리턴값 타입 정의 : 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용할 수 있게 익스포트 해두기
export type RootState = ReturnType<typeof rootReducer>
