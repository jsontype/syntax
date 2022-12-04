import React from "react";
import Counter from "./Counter";

import { useSelector, useDispatch } from "react-redux";
import { increaseAsync, decreaseAsync } from "../../modules/counter";

export default function CounterContainer() {
  // state 조회
  const number = useSelector((state) => state.counter);
  // action 조회
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
  // UI 컴포넌트 렌더링
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}
