import "./App.css";
import { memo, useState } from "react";

const Count2 = memo(({ count, handleClick }) => {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
  return (
    <div>
      <p>카운트2: {count}</p>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
});

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>카운트1</button>
      <button onClick={() => setCount2(count2 + 1)}>카운트2</button>
      <p>카운트1 : {count1}</p>
      <Count2 count={count2} handleClick={handleClick} />
    </div>
  );
}

export default App;
