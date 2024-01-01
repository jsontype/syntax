import { memo, useState } from "react"
import "./App.css"

const Child = memo(({ count2 }) => {
  let i = 0
  while (i < 3000000000) i++
  console.log("render Child")
  return <span>count2: {count2}</span>
})

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>
        <Child count2={count2} />
      </button>
    </div>
  )
}
