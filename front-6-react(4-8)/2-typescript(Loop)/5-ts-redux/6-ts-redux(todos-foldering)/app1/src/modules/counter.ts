/* Counter의 Redux 모듈을 typesafe-actions로 리팩토링하기 */

// typesafe-actions에서 필요한 함수, 타입 임포트
import { createAction, ActionType, createReducer } from 'typesafe-actions'

/* 액션 타입 선언 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

/* 액션 생성함수 선언 : 액션 생성 함수를 createAction을 사용해서 한 줄로 쉽게 작성 할 수 있게 되었다. */
// 즉, createAction을 통해, createReducer에서 리듀서를 switch문이 아닌 객체 형태로 작성 할 수 있게 해줬다.
export const increase = createAction(INCREASE)()
export const decrease = createAction(DECREASE)()
export const increaseBy = createAction(INCREASE_BY)<number>() // payload 타입을 Generics로 설정한다.

/* 액션 객체 타입 준비 */
const actions = { increase, decrease, increaseBy } // 모든 액션 생성함수들을 actions 객체에 넣는다.
type CounterAction = ActionType<typeof actions> // ActionType를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있다.

/* State 타입 선언 */
type CounterState = {
    count: number
}

/* State 초기값 선언 */
const initialState: CounterState = {
    count: 0
}

/* 리듀서 선언 : 아래의 처리를 통해 createReducer에서 리듀서를 switch문으로 직접 만드는 형태가 아닌 객체 형태로 작성할 수 있고, 따라서 코드가 훨씬 깔끔해진다. */
// createReducer : 리듀서를 쉽게 만들 수 있게 해주는 함수
// <CounterState, CounterAction> : 리듀서에서 관리할 State, 리듀서에서 처리 할 액션 객체들의 타입을 Generics로 정의
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }), // 액션을 참조 할 필요 없으면 파라미터로 state만 받아와도 된다.
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }) // 액션의 타입은 유추 할 수 있다.
})

export default counter
