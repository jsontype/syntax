// 액션타입, 액션생성함수, 초기값, 리듀서를 한 파일에 작성하는 Ducks 패턴을 사용한다.

// 액션타입
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// 액션생성함수 : Ducks 패턴을 따르는 리덕스모듈에서는 원래 중복을 피하기위해 액션이름에 'counter/INCREASE' 이런식으로 앞부분에 접두어를 둬야한다. (이번엔 생략)
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// ★ 액션타입함수를 Thunk 함수로 대체 : 액션타입함수를 생성하는 대신 Thunk 함수를 생성한다. 
export const increaseAsync = () => dispatch => { // getState를 쓰지 않는다면 굳이 파라미터를 받아올 필요없다.
  setTimeout(() => dispatch(increase()), 1000) // ★ 비동기처리 추가 : setTimeout를 사용하여 액션이 디스패치되는 것을 1초씩 딜레이시킨다.
}
export const decreaseAsync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000) // ★ 비동기처리 추가 : setTimeout를 사용하여 액션이 디스패치되는 것을 1초씩 딜레이시킨다.
}

// 초기값 (상태가 객체가 아니라 그냥 숫자여도 상관 없다.)
const initialState = 0

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
        return state + 1
    case DECREASE:
        return state - 1
    default:
        return state
  }
}
