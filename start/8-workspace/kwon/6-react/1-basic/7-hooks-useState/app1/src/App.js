import React, { useState } from "react"
import Counter from "./Counter"

export default function App() {
  // JS
  const [number, setNumber] = useState(0)

  // XML
  return (
    <div className="app">
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
      <Counter number={number} setNumber={setNumber} />
    </div>
  )
}
