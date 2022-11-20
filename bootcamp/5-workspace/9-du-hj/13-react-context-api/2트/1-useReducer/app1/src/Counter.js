// 1. useReducer 임포트
import React, { useReducer } from "react";

// 2. reducer 만들기
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  // 3. useReducer로 state 선언하기 : setState를 dispatch로 변경, 인자값은 reducer를 초기값 앞에 추가
  const [number, dispatch] = useReducer(reducer, 0);

  // 4. 함수는 setState로 직접 바꾸는 게 아니라, reducer에서 작성한 액션 타입을 dispatch하는 방식으로 변경
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
