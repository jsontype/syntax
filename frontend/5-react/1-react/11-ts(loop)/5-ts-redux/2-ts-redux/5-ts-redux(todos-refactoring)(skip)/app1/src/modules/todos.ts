/* Todos의 Redux 모듈을 typesafe-actions로 리팩토링하기 */

// typesafe-actions에서 필요한 함수, 타입 임포트
import { createAction, createReducer, ActionType, action } from 'typesafe-actions'

/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'
const REMOVE_TODO = 'todos/REMOVE_TODO'

/* 고유 ID 값 선언 : 새로운 항목을 추가 할 때 사용할 값 */
let nextId = 1

/* 액션 생성함수 선언 : 액션 생성 함수를 createAction을 사용해서 한 줄로 쉽게 작성 할 수 있게 되었다. */
// 이 액션 생성 함수의 경우엔 파라미터를 기반하여 커스터마이징된 payload를 설정해주므로, createAction이라는 함수를 사용한다.
// addTodo 코드는 다음과 같은 형태로도 구현 할 수 있다.
// (* 그러나, createAction말고 action만 사용하면 Action Helpers(https://www.npmjs.com/package/typesafe-actions#action-helpers-api) 지원이 안 된다.)
// export const addTodo = (text: string) => action(ADD_TODO, { id: nextId++, text }) // 여기서 action은 액션 객체를 만드는 함수이다.
export const addTodo = createAction(ADD_TODO, (text: string) => ({
    id: nextId++,
    text: text,
}))<Todo>()
export const toggleTodo = createAction(TOGGLE_TODO)<number>() // payload가 그대로 들어가는 액션생성함수 선언은 이렇게 간단하다.
export const removeTodo = createAction(REMOVE_TODO)<number>() // payload가 그대로 들어가는 액션생성함수 선언은 이렇게 간단하다.

/* 액션 객체 타입 준비 */
const actions = {
    addTodo,
    toggleTodo,
    removeTodo
}
type TodosAction = ActionType<typeof actions>

/* State 타입 선언 */
export type Todo = {
    id: number
    text: string
    done: boolean
}
export type TodosState = Todo[] // 이 모듈에서 관리할 State는, "Todo 객체로 이루어진 배열 타입"이라고 선언한 것이다.

/* State 초기값 선언 */
const initialState: TodosState = []

/* 리듀서 선언 : 아래의 처리를 통해 createReducer에서 리듀서를 switch문으로 직접 만드는 형태가 아닌 객체 형태로 작성할 수 있고, 따라서 코드가 훨씬 깔끔해진다. */
// createReducer : 리듀서를 쉽게 만들 수 있게 해주는 함수
// <TodosState, TodosAction> : 리듀서에서 관리할 State, 리듀서에서 처리 할 모든 액션 객체들의 타입을 Generics로 정의
const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => // 액션의 타입은 유추할 수 있다. 
        state.concat({
            ...action.payload, // id, text가 이 안에 들어간다.
            done: false
        }),
    // { payload: id }와 같이 비구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있다.
    [TOGGLE_TODO]: (state, { payload: id }) => state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, { payload: id }) => state.filter(todo => todo.id !== id)
})

export default todos
