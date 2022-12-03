/** 액션 타입 정의 */
// todos 접두사를 붙이는 이유 : 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있다.
const ADD_TODO = "todos/ADD_TODO";
const COMPLETE_TODO = "todos/COMPLETE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

/** 액션 생성함수 정의 : 타입과 함께, 필요한 파라미터를 같이 넘겨준다. */
let key = 2;
export const addTodo = (title) => ({
  type: ADD_TODO,
  todo: {
    id: key++,
    title: title,
    completed: false,
    userId: 1,
  },
});
export const completeTodo = (id) => ({ type: COMPLETE_TODO, id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });

/** 초기값 정의 */
const init = [
  {
    id: 1,
    title: "할일",
    completed: false,
    userId: 1,
  },
];

/** 리듀서함수 정의 */
export default function todos(state = init, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case COMPLETE_TODO:
      return state.map((item) => {
        return item.id === action.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    case DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
}
