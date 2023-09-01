import React from "react"
import Counter from "./Counter"
import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
    </div>
  )
}
