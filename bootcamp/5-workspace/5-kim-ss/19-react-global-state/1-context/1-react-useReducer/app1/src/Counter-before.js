import React, { useReducer } from "react";

function reducer(atate, action) {
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
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" }); // 함수형 업데이트 후 : prevNumber => prevNumber + 1
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" }); // 함수형 업데이트 후 : prevNumber => prevNumber - 1
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
