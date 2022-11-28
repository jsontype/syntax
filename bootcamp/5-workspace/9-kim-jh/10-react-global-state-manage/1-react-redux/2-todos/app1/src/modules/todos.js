// 액션 타입
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// 액션 생성 함수
let nextId = 2;
export const addTodo = (title) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    title: title,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

// 초기값
const initState = [
  {
    id: 1,
    title: "",
    completed: false,
  },
];

// 리듀서
export default function todos(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
}
