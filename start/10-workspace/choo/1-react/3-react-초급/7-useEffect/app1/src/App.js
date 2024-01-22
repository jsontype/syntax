import React from "react"
import Counter from "./Counter"
import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>카운트</button>
      {isOpen && <Counter count={count} setCount={setCount} />}
    </>
  )
}
