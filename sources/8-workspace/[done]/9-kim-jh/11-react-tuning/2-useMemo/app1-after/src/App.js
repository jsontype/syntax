import React, { useState, useMemo } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count) => {
    let i = 0;
    while (i < 3000000000) i++;
    console.log("run double");
    return count * 2;
  };

  // useMemo로 값 재렌더링 막기 : useMemo(() => { 값 리턴 함수 }, [deps 배열])
  const doubledCount = useMemo(() => double(count2), [count2]);

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
}
