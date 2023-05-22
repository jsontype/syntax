/*
  [redux-saga의 effects 함수로 액션을 디스패치하고, 모니터링 처리하기]

  'redux-saga/effects'의 유틸함수 중 put 함수: 새로운 액션을 디스패치
  'redux-saga/effects'의 유틸함수 중 takeEvery, takeLatest 함수: 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 모니터링 처리
  'redux-saga/effects'의 유틸함수 중 takeLatest 함수: 특정 액션 타입에 대하여 디스패치된 가장 마지막 액션만을 모니터링 처리
  (예를 들면, 특정 액션을 처리하고 있는 동안 동일한 타입의 새로운 액션이 디스패치되면 기존에 하던 작업을 무시 처리하고 새로운 작업을 시작한다.)
*/

// effect 함수 임포트
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// 액션 타입
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const INCREASE_ASYNC = 'INCREASE_ASYNC'
const DECREASE_ASYNC = 'DECREASE_ASYNC'

// 액션 생성 함수 : thunk 함수에서 일반 액션 생성 함수로 대체시킨다.
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increaseAsync = () => ({ type: INCREASE_ASYNC })
export const decreaseAsync = () => ({ type: DECREASE_ASYNC })

// saga 함수 만들기
function* increaseSaga () {
  yield delay(1000)
  yield put(increase()) // 특정 액션을 디스패치
}
function* decreaseSaga () {
  yield delay(1000)
  yield put(decrease()) // 특정 액션을 디스패치
}

// counterSaga 함수 만들기 : 두 액션을 모니터링
export function* counterSaga () { // counterSaga 함수의 경우 다른 곳에서 불러와서 사용해야 하기 때문에 export 키워드를 사용
  yield takeEvery(INCREASE_ASYNC, increaseSaga) // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga) // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

// 초기값 (상태가 객체가 아니라 그냥 숫자여도 상관 없다.)
const initialState = 0

// 리듀서
export default function counter (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - 1
    default:
      return state
  }
}
