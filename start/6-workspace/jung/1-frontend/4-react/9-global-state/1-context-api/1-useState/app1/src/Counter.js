import React from "react"
import { useState } from "react"

export default function Counter() {
  // Local State : 지역에서만 적용이 가능하다.
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount((count) => count + 1)
  }
  const onDecrease = () => {
    setCount((count) => count - 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
