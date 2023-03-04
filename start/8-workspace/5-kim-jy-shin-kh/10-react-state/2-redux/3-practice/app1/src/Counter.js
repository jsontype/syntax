import React from "react"

export default function Counter({ count, onIncrease, onDecrease }) {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
