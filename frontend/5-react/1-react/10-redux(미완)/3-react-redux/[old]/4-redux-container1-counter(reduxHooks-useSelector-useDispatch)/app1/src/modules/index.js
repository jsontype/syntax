import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'

/* 루트 리듀서를 사용해 리듀서 하나로 합치기 */
// 현재 두가지(counter, todos)의 리덕스 모듈을 만들었으므로 파일도 두개, 리듀서도 두개이지만,
// 한 프로젝트에 여러개의 리듀서가 있을때는 이를 하나의 "루트 리듀서"로 합쳐서 사용한다.
// 리듀서를 합치는 작업은 리덕스에 내장되어있는 combineReducers라는 함수를 사용한다.
const rootReducer = combineReducers({
  counter,
  todos
})

export default rootReducer
// 이제 리듀서를 합친 루트 리듀서가 만들어졌다. 
// 그 다음은 루트리듀서를 임포트하는 스토어를 만들어주면 된다.
