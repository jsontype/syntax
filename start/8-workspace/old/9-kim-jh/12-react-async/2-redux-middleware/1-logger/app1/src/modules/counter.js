/** 액션 타입 정의 */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/** 액션 생성함수 정의 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/** 초기값 정의 */
const initialState = 0;

/** 리듀서 정의 */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
