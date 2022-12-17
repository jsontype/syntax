import { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [userId, , , , ,] = arr;

  const [obj, setObj] = useState({ id: "yang123", pw: "3qeklfew12" });
  const { id, pw } = obj;

  return (
    <div className="App">
      id: {id}, pw: {pw}
      <hr></hr>
      userId: {userId}
    </div>
  );
}

export default App;
