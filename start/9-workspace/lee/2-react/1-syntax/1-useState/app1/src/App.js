// CSS
import { useState } from 'react';
import './App.css';

// JSX 문법
export default function App() {
  // JS
  // 리액트에서 변수는, 항상 local state 또는 global state로 관리해야 함.
  const [number, setNumber] = useState(0)
  {/*
    DOM에서 함수를 이벤트리스너로 불러올 때는 함수형 업데이트가 필요함.
    함수형 업데이트 : () => { return sth }
  */}
  const increase = () => setNumber(number + 1)
  const decrease = () => setNumber(number - 1)

  // XML
  return (
    <>
      <div className="App">
        { number }
        <button onClick={increase}>+</button> 
        <button onClick={decrease}>-</button>
      </div>
      <div></div>
    </>
  );
}
