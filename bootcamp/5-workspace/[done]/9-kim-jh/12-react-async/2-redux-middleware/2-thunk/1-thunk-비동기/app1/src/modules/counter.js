/** 액션 타입 정의 */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/** 액션 생성함수 정의 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/** Thunk 함수 정의 : 비동기처리 추가 (setTimeout를 사용하여 액션이 디스패치되는 것을 1초씩 딜레이시킨다.) */
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

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
