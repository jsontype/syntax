import { createReducer } from 'typesafe-actions'
// todos.ts 모듈 파일을 여러개로 나누면서, 서로 떨어졌지만 여전히 필요한 것은 따로 임포트해준다.
import { TodosState, TodosAction } from './types'
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions'

/* State 초기값 선언 */
const initialState: TodosState = []

/* 리듀서 선언 : 아래의 처리를 통해 createReducer에서 리듀서를 switch문으로 직접 만드는 형태가 아닌 객체 형태로 작성할 수 있고, 따라서 코드가 훨씬 깔끔해진다. */
// createReducer : 리듀서를 쉽게 만들 수 있게 해주는 함수
// <TodosState, TodosAction> : 리듀서에서 관리할 State, 리듀서에서 처리 할 모든 액션 객체들의 타입을 Generics로 정의
const reducer = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => // 액션의 타입은 유추할 수 있다. 
        state.concat({
            ...action.payload, // id, text가 이 안에 들어간다.
            done: false
        }),
    // { payload: id }와 같이 비구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있다.
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter(todo => todo.id !== id)
})

export default reducer
