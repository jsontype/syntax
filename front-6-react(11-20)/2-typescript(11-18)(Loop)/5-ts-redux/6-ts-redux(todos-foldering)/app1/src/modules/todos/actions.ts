import { createAction } from 'typesafe-actions'
// todos.ts 모듈 파일을 여러개로 나누면서, 서로 떨어졌지만 여전히 필요한 것은 따로 임포트해준다.
import { Todo } from './types'

/* 액션 타입 선언 : 리듀서에서 사용 할 수 있도록 export를 붙여준다. */
export const ADD_TODO = 'todos/ADD_TODO'
export const TOGGLE_TODO = 'todos/TOGGLE_TODO'
export const REMOVE_TODO = 'todos/REMOVE_TODO'

/* 고유 ID 값 선언 : 새로운 항목을 추가 할 때 사용할 값 */
let nextId = 1

/* 액션 생성함수 선언 : 액션 생성 함수를 createAction을 사용해서 한 줄로 쉽게 작성 할 수 있게 되었다. */
export const addTodo = createAction(ADD_TODO, (text: string) => ({
    id: nextId++,
    text: text,
}))<Todo>()
export const toggleTodo = createAction(TOGGLE_TODO)<number>() // payload가 그대로 들어가는 액션생성함수 선언은 이렇게 간단하다.
export const removeTodo = createAction(REMOVE_TODO)<number>() // payload가 그대로 들어가는 액션생성함수 선언은 이렇게 간단하다.
