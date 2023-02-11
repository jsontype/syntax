import React from 'react'

type CounterProps = { 
  count: number, 
  setCount: (value: number) => void,
}

export default function Counter({ count, setCount }: CounterProps) {
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
