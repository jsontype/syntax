/** action 타입 정의 */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/** action 생성함수 정의 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/** state 초기값 정의 */
const init = {
  number: 0,
};

/** 리듀서함수 정의 */
export default function counter(state = init, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
