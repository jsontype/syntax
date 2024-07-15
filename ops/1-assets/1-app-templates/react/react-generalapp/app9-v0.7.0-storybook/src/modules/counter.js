const INCREASE = "counter/INCREASE"
const DECREASE = "counter/DECREASE"

export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

const initialState = {
  count: 0,
}

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