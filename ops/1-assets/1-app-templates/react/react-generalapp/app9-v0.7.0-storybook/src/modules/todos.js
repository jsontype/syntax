// 1. 리듀서 : 액션타입 -> 액션생성함수 -> 초기상태 -> 리듀서

// 액션타입
const ADD_TODO = "todo/ADD_TODO";
const COMPLETE_TODO = "todo/COMPLETE_TODO";
const DELETE_TODO = "todo/DELETE_TODO";

// 액션생성함수
let key = 2
export const addTodo = (title) => ({
    type: ADD_TODO,
    todo: {
        id: key++,
        title,
        completed: false,
        userID: 1,
    }
});
export const completeTodo = (id) => ({ type: COMPLETE_TODO, id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });

//초기값
const initialState = [
    {
        id: 1,
        title: "",
        completed: false,
        userID: 1,
    }
]

// 리듀서
export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo]
        case COMPLETE_TODO:
            return state.map((item) => {
                return item.id === action.id
                ? { ...item, completed: !item.completed }
                : item
            })
        case DELETE_TODO:
            return state.filter((item) => {
                return item.id !== action.id
            })
            default:
                return state
    }
}