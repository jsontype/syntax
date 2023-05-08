/* Todos의 Redux 모듈 작성하기 */
// Redux 관련 코드를 작성할 때 Ducks 패턴을 사용 할 것이다.
// 즉, 액션타입, 액션생성함수, 리듀서를 모두 한 파일에 작성하겠다는 의미이다.

/* 액션 타입 선언 */
// 뒤에 as const를 붙여줌으로써 나중에 액션 객체를 만들기 위해 action.type의 값을 추론하는 과정에서
// action.type이 "단순 string"으로 추론되지 않고 'counter/INCREASE' 와 같이 "변수안에 들어가는 실제 문자열 값"으로 추론 되도록 한다.
// 무슨 말이냐면,
// as const를 쓰지 않고 string으로 했을 때의 타입은 { type: string; }이 되고, 
// as const를 쓰고 const로 했을 때의 타입은 { type: "todos/ADD_TODO"; }이 되므로, 후자가 맞다는 얘기다.
const ADD_TODO = 'todos/ADD_TODO' as const
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const
const REMOVE_TODO = 'todos/REMOVE_TODO' as const

/* 고유 ID 값 선언 : 새로운 항목을 추가 할 때 사용할 값 */
let nextId = 1

/* 액션 생성함수 선언 */
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
})
export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
})

/* 액션 타입 선언 */
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>

/* State 타입 선언 */
export type Todo = {
    id: number
    text: string
    done: boolean
}
export type TodosState = Todo[] // 이 모듈에서 관리할 State는, "Todo 객체로 이루어진 배열 타입"이라고 선언한 것이다.

/* State 초기값 선언 */
const initialState: TodosState = []

/* 리듀서 선언 */
// 리듀서에서는 State와 함수의 리턴값이 일치하도록 작성한다.
// 액션에서는 방금 만든 TodosAction을 타입으로 설정한다.
export default function todos(
    state: TodosState = initialState,
    action: TodosAction
): TodosState {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                // action.payload 객체 안의 값이 모두 유추된다. * 상단부에서 액션 타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않는다.
                id: action.payload.id,
                text: action.payload.text,
                done: false
            })
        case TOGGLE_TODO:
            return state.map(todo =>
                // payload 가 number 인 것이 유추된다. * 상단부에서 액션 타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않는다.
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            )
        case REMOVE_TODO:
            // payload 가 number 인 것이 유추된다. * 상단부에서 액션 타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않는다.
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}
