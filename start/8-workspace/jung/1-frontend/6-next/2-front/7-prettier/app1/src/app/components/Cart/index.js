'use client'

import React, { useState } from 'react'

export default function Cart({ price }) {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    count > 0 && setCount(count - 1)
  }

  return (
    <div>
      <div>수량: {count}</div>
      <div>가격: {count * price}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
