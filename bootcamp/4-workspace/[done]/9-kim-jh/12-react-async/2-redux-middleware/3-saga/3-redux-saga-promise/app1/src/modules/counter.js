/** 1. effect 함수 임포트
 * put : 새로운 액션 디스패치
 * takeEvery : 모든 액션을 모니터링
 * takeLatest : 가장 최근 액션을 모니터링
 */
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// 액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

// 액션생성함수 : Ducks 패턴을 따르는 리덕스모듈에서는 원래 중복을 피하기위해 액션이름에 'counter/INCREASE' 이런식으로 앞부분에 접두어를 둬야한다. (이번엔 생략)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// 2. saga 함수 만들기
function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); // 특정 액션을 디스패치
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease()); // 특정 액션을 디스패치
}

// 3. counterSaga 함수 만들기 : 두 액션을 모니터링
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

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
