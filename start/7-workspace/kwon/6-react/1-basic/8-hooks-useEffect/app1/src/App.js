import React, { useState } from "react"
import Counter from "./Counter"

export default function App() {
  // JS
  const [number, setNumber] = useState(0)
  const [open, setOpen] = useState(false)

  // XML
  return (
    <div className="app">
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && <Counter number={number} setNumber={setNumber} />}
    </div>
  )
}
