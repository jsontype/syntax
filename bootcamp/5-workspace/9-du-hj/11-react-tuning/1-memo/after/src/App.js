import React, { memo, useState } from "react";

const Child = memo((props) => {
  let i = 0;
  while (i < 3000000000) i++;
  console.log("render Child");
  return <p>Child: {props.count}</p>;
});

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>카운트1</button>
      <button onClick={() => setCount2(count2 + 1)}>카운트2</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}
