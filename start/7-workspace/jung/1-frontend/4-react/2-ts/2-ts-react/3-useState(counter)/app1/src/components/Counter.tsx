import React, { useState } from "react"
import Title from "components/atoms/Title"

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <Title text="카운터 앱" />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
