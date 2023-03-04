import React from "react"
import { useContext } from "react"
import { CounterContext } from "./App"

export default function Counter({ state }) {
  // Local State : 지역에서만 적용이 가능하다.
  const count = state.counter.count
  const dispatch = useContext(CounterContext)

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
