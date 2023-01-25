import React, { useState, memo } from "react";

// ★★ 컴포넌트 메모화
const Child = memo((props) => {
  let i = 0;
  while (i < 3000000000) i++;
  console.log("render Child");
  return <p>Child: {props.count}</p>;
});

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>

      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}

export default App;
