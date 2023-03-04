// 5. UI 컴포넌트 만들기 : 여기서부터 스토어를 사용하는 부분 만드는 것임
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
