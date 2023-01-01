import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1); // 함수형 업데이트 후 : prevNumber => prevNumber + 1
  };

  const onDecrease = () => {
    setNumber(number - 1); // 함수형 업데이트 후 : prevNumber => prevNumber - 1
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
