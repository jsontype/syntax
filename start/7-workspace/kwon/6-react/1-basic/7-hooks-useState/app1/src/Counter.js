import React from "react"

export default function Counter({ number, setNumber }) {
  return (
    <div>
      <h1>카운터 앱</h1>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  )
}
