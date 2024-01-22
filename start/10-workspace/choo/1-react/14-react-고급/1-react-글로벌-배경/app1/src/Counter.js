// import { useState } from "react"
import React from "react"

export default function Counter({ count, setCount }) {
  // export default function Counter() {
  // const [count, setCount] = useState(0) // 로컬 스테이트 : 이 컴포넌트 안에서만 사용하는 스테이트

  const onIncrease = () => {
    setCount(count + 1)
  }
  const onDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  )
}
