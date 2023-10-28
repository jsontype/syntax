import { memo, useState, useCallback } from "react"
import "./App.css"

const Child = memo(({ count2, onClick }) => {
  let i = 0
  while (i < 3000000000) i++
  console.log("render Child")
  return (
    <>
      <h1>count2: {count2}</h1>
      <button onClick={onClick}>count2 +</button>
    </>
  )
})

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const onClick = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  return (
    <div className="App">
      <h1>count1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>count1 +</button>

      <Child count2={count2} onClick={onClick} />
    </div>
  )
}
