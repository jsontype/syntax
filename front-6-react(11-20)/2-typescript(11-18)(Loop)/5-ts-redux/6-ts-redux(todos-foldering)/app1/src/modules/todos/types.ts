import { ActionType } from 'typesafe-actions'
// todos.ts 모듈 파일을 여러개로 나누면서, 서로 떨어졌지만 여전히 필요한 것은 따로 임포트해준다.
import * as actions from './actions'

/* 액션 객체 타입 준비 : 한번에 모두 import 해와서 actions에 담았기 때문에, 액션의 종류가 많아져도 이 부분은 한 줄로 작성 할 수 있다. */
export type TodosAction = ActionType<typeof actions>

/* State 타입 선언 */
export type Todo = {
    id: number
    text: string
    done: boolean
}
export type TodosState = Todo[] // 이 모듈에서 관리할 State는, "Todo 객체로 이루어진 배열 타입"이라고 선언한 것이다.
