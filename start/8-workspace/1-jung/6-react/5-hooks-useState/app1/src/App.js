import "./App.css"
import { useState } from "react"

// JSX 문법
export default function App() {
  // JS : 리액트는 불변성의 법칙을 지켜야 하는 룰이 있다. 이유는 나중에!
  // 리액트에서 state 변수를 선언하고, 변수값을 바꾸는 방법은 아래와 같다.
  // const [name, setName] = useState("Yang")
  // setName("Kim")

  const [number, setNumber] = useState(0)

  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber(number - 1)
  }

  // XML
  return (
    <div className="App">
      <h1>카운터 앱</h1>
      <h2>{number}</h2>

      {/* 렌더링할 때에는 이벤트리스터 부분에 함수형 업데이트 (() => {})를 해줘야함! */}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
