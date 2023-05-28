// 1. 리듀서 : 액션타입 -> 액션생성함수 -> 초기상태 -> 리듀서

// 액션타입
const INCREASE = "counter/INCREASE"
const DECREASE = "counter/DECREASE"

// 액션생성함수
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// 초기값
const initialState = {
  count: 0,
}

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}
