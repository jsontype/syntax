import React from "react";
import Counter from ".";

import { increase, decrease } from "../../modules/counter";
import { useSelector, useDispatch } from "react-redux";

export default function CounterContainer() {
  // useSelector : state를 조회하는 react-redux hook
  const { number } = useSelector((state) => ({ number: state.counter.number }));

  // useDispatch : action을 dispatch(실행)하는 react-redux hook
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}
