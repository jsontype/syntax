// 1. 리듀서 만들기

// 액션 타입 정의
const ADD_TODO = "todos/ADD_TODO"
const DELETE_TODO = "todos/DELETE_TODO"
const TOGGLE_TODO = "todos/TOGGLE_TODO"

// 액션 생성함수 정의
let key = 1
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: { id: key++, title: text, completed: false, userId: 1 },
})
export const deleteTodo = (id) => ({ type: DELETE_TODO, id })
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id })

// 초기값 정의
const initialState = []

// 리듀서 정의
export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id)
    case TOGGLE_TODO:
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      )
    default:
      return state
  }
}
