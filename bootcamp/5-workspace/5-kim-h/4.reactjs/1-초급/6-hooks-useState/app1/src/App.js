// CSS
import { useState } from 'react'
import './App.css'

function App() {
  //JS
  // 리액트에서의 변수
  // const a = 1
  const [a, setA] = useState(1)

  const onIncrease = () => {
    setA(a + 1)
  }

  const onDecrease = () => {
    setA(a - 1)
  }

  // HTML
  return (
    <>
      {a}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  )
}

export default App
