import { useState, useMemo } from "react"
import "./App.css"

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const double = (count) => {
    let i = 0
    while (i < 3000000000) i++
    console.log("render Child")
    return count * 2
  }

  const doubledCount = useMemo(() => double(count2), [count2])

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>
        count2: {count2} / doubled count2: {doubledCount}
      </button>
    </div>
  )
}
