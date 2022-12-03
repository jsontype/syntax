/** Container : moduler과 component를 연결해줌 */
import React from "react";
import Counter from "./Counter";

import { increase, decrease } from "../../modules/counter";
import { useSelector, useDispatch } from "react-redux"; // useSelector - state 조회 , useDispatch - action 호출

export default function CounterContainer() {
  // state 연결
  const { number } = useSelector((state) => ({ number: state.counter.number }));

  // action 연결
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}
