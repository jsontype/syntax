import "./App.css";
import { useState } from "react";

const Count2 = ({ count }) => {
  for (let i = 0; i < 300000; i++) {
    console.log(i);
  }
  return <p>카운트2: {count}</p>;
};

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>카운트1</button>
      <button onClick={() => setCount2(count2 + 1)}>카운트2</button>
      <p>카운트1 : {count1}</p>
      <Count2 count={count2} />
    </div>
  );
}

export default App;
