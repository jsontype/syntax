import React from "react"
import { useReducer } from "react"
import reducer from "./CounterReducer"

export default function Counter() {
  // Local State : 지역에서만 적용이 가능하다.
  const [count, dispatch] = useReducer(reducer, 0)

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" })
  }

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" })
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
