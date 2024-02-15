// 액션타입, 액션생성함수, 초기값, 리듀서를 한 파일에 작성하는 Ducks 패턴을 사용한다.

// 액션타입
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// 액션생성함수 : Ducks 패턴을 따르는 리덕스모듈에서는 원래 중복을 피하기위해 액션이름에 'counter/INCREASE' 이런식으로 앞부분에 접두어를 둬야한다. (이번엔 생략)
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

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
