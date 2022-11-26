import "./App.css";
import { useState } from "react";

export default function App() {
  // JS
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [firstValue, , , ,] = arr;

  const [obj, setObj] = useState({ id: "yang", pw: "abc1234" });
  const { id, pw } = obj;
  // XML
  return (
    <div className="App">
      <div>{firstValue}</div>
      <div>
        {id} {pw}
      </div>
    </div>
  );
}
