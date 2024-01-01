import React from "react"
import { useReducer } from "react"
import reducer from "./CounterReducer"

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0) // useReducer(reducer 함수, 초기값)

  const onIncrease = () => {
    dispatch({ type: "INCREASE" })
  }
  const onDecrease = () => {
    dispatch({ type: "DECREASE" })
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
