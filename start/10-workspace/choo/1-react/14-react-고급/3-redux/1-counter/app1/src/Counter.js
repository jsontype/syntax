// 6. Presentational 컴포넌트 만들기
import React from "react"

export default function Counter({ count, onIncrease, onDecrease }) {
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}
