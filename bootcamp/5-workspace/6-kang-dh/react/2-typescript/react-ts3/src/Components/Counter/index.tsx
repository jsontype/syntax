import React, { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState<number>(0)

  const onIncrease = () => setNumber(number + 1)
  const onDecrease = () => setNumber(number - 1)

  return (
    <>
      <div>{number}</div>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  )
}
