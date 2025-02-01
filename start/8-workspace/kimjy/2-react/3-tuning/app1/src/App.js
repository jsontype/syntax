import React, { useState } from "react";
import Child from "./Child";

function App() {
  const [count1, setCount1] = useState(0);
  
  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>App: {count1}</button>
      <Child />
    </>
  );
}

export default App;
