import React from "react";
import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>Count: {count}</div>
    </>
  );
}
