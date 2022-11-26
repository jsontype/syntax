import "./App.css";
import { useState } from "react";

export default function App() {
  // JS
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [obj, setObj] = useState({ id: "yang", pw: "abc1234" });

  const addArr = () => {
    setArr([...arr, 6]);
  };
  const modArr = () => {
    setArr(
      arr.map((item, index) => {
        return index === arr.length - 1 ? 9 : item;
      })
    );
  };
  const delArr = () => {
    setArr(
      arr.filter((item, index) => {
        return index !== arr.length - 1;
      })
    );
  };

  const addObj = () => {
    setObj({ ...obj, email: "test@example.com" });
  };
  const modObj = () => {
    setObj({ ...obj, pw: "abc1212" });
  };
  const delObj = () => {
    const { pw, ...delObj } = obj;
    setObj(delObj);
  };

  // XML
  return (
    <div className="App">
      <div>{arr}</div>
      <button onClick={addArr}>배열추가</button>
      <button onClick={modArr}>배열수정</button>
      <button onClick={delArr}>배열삭제</button>
      <hr />
      <div>id: {obj.id}</div>
      <div>pw: {obj.pw}</div>
      <div>
        {obj.email && "email:"} {obj.email}
      </div>
      <button onClick={addObj}>객체추가</button>
      <button onClick={modObj}>객체수정</button>
      <button onClick={delObj}>객체삭제</button>
    </div>
  );
}
