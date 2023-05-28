import React, { useState } from "react"

export default function Counter() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h2>Counter</h2>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </>
  )
}
