"use client"

import React, { useState } from "react"

// Client 컴포넌트 : 1. useState 같은 Hook 함수, 2. onClick 같은 이벤트 핸들러 함수, 3. props 등을 사용하는 컴포넌트
// 그러나 기본적으로 next는 Server 컴포넌트로 동작하기 때문에, 위와 같은 기능을 사용하는 컴포넌트는 Client 컴포넌트라고 정의해주어야 한다.
// 정의 방법은 페이지 최상단에, "use client"라는 문구를 넣어야 한다.
export default function Cart({ price }) {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>수량 : {count}</div>
      <div>가격 : {price * count}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  )
}
