import { useState } from 'react'
import './style.css'

export default function Counter () {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className="countLabel">{count}</div>
      <button className="countBtn" onClick={onIncrease}>+</button>
      <button className="countBtn" onClick={onDecrease}>-</button>
    </>
  )
}
