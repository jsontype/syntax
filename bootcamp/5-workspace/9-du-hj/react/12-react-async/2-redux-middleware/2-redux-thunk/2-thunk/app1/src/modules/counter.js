// 액션타입, 액션생성함수, 초기값, 리듀서를 한 파일에 작성하는 Ducks 패턴을 사용한다.

// 액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션생성함수 : Ducks 패턴을 따르는 리덕스모듈에서는 원래 중복을 피하기위해 액션이름에 'counter/INCREASE' 이런식으로 앞부분에 접두어를 둬야한다. (이번엔 생략)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// ★ Thunk 함수 : 비동기처리 추가하기 위해서 쓴다.
// Thunk 함수를 설정하고,
// 이후 컨테이너에서 기존 액션생성함수 호출(increase)을 thunk 함수(increaseAsync)로 대체
export const increaseAsync = () => {
  return (dispatch) => {
    setTimeout(() => dispatch(increase()), 1000);
  };
};
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(increase()), 1000);
// };
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 초기값 (상태가 객체가 아니라 그냥 숫자여도 상관 없다.)
const initialState = 0;

// 리듀서
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
