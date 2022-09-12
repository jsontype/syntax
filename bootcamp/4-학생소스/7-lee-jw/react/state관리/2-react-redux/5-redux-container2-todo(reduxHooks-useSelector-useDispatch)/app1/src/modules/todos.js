/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

/* 액션 생성함수 선언 */
// todo 데이터에서 사용 할 고유 키 값
let nextId = 1

export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        // 새 항목을 추가할 때마다, 키가 중복되지 않도록 nextId 값에 1을 더해준다.
        id: nextId++, 
        text
    }
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

/* 초기 상태 선언 */
// 리듀서의 초기 상태가 꼭 객체타입일 필요는 없다.
// 배열이여도 되고, 원시 타입(Number, String, Boolean) 이여도 상관없다.
const initialState = [
  /* 
    여기서는 다음과 같은 형태의 객체를 이 배열 안에 넣을 것이다.
    {
        id: 1,
        text: '예시',
        done: false
    } 
  */
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo =>
                    // id가 일치하면, done을 토글링하고, 아니면 그대로 놔둔다.
                    todo.id === action.id
                        ? { ...todo, done: !todo.done }
                        : todo 
            )
            default:
        return state
    }
}
