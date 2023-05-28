import { useState } from "react"

function App() {
  // JS : 리액트에서 상수가 아닌, 변수 선언하는 방법 -> 스테이트 변수
  const [number, setNumber] = useState(0)

  // XML
  return (
    <div>
      <h2>Hooks</h2>
      <div>Count: {number}</div>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  )
}

export default App
