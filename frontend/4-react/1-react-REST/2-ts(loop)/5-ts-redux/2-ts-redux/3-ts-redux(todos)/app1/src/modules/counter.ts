/* Counter의 Redux 모듈 작성하기 */
// Redux 관련 코드를 작성할 때 Ducks 패턴을 사용 할 것이다.
// 즉, 액션타입, 액션생성함수, 리듀서를 모두 한 파일에 작성하겠다는 의미이다.

/* 액션 타입 선언 */
// 뒤에 as const를 붙여줌으로써 나중에 액션 객체를 만들기 위해 action.type의 값을 추론하는 과정에서
// action.type이 "단순 string"으로 추론되지 않고 'counter/INCREASE' 와 같이 "변수안에 들어가는 실제 문자열 값"으로 추론 되도록 한다.
// 무슨 말이냐면,
// as const를 쓰지 않고 string으로 했을 때의 타입은 { type: string; }이 되고, 
// as const를 쓰고 const로 했을 때의 타입은 { type: "counter/INCREASE_BY"; }이 되므로, 후자가 맞다는 얘기다.
const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const
const INCREASE_BY = 'counter/INCREASE_BY' as const

/* 액션 생성함수 선언 */
export const increase = () => ({
    type: INCREASE
})
export const decrease = () => ({
    type: DECREASE
})
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    // 액션에 부가적으로 필요한 값을 payload라는 이름으로 통일한다.
    payload: diff
})
// payload로 하는 이유는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙을 따르는 것이다.
// FSA 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
// 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있다는 것이다.
// 다만, 무조건 꼭 따를 필요는 없다.

/* 액션 타입 선언 */
type CounterAction =
    // ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해준다.
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>

/* State 타입 선언 */
type CounterState = {
    count: number
}

/* State 초기값 선언 */
const initialState: CounterState = {
    count: 0
}

/* 리듀서 선언 */
// 리듀서에서는 State와 함수의 리턴값이 일치하도록 작성한다.
// 액션에서는 방금 만든 CounterAction을 타입으로 설정한다.
export default function counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch (action.type) {        
        case INCREASE:
            return { count: state.count + 1 }
        case DECREASE:
            return { count: state.count - 1 }
        case INCREASE_BY:
            // action.payload 객체 안의 값이 모두 유추된다. * 상단부에서 액션 타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않는다.
            return { count: state.count + action.payload }
        default:
            return state
    }
}
