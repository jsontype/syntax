import React from "react"
import { useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1

    case "DECREMENT":
      return state - 1

    default:
      return state
  }
}

export default function Counter() {
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
      <Button count={count} onIncrease={onIncrease} type={plus} />
    </div>
  )
}
