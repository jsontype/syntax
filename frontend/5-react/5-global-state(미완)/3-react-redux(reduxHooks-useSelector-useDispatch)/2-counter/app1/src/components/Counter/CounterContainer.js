import React from "react";
import Counter from "./Counter";

/** counter 모듈에서 정의한 액션 생성함수 임포트 */
import { increase, decrease } from "../../modules/counter";
/** react-redux 함수 임포트 : useSelector = state 조회, useDispatch = action 호출 */
import { useSelector, useDispatch } from "react-redux";

export default function CounterContainer() {
  // state를 연결
  const { number } = useSelector((state) => ({ number: state.counter.number }));
  // action을 연결 : ★ dispatch 쓸 때 함수형 업데이트 필수!
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}
