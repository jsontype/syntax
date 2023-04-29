"use client"

import React, { useState } from "react"
import Title from "./Title"

export default function List() {
  const [count, setCount] = useState(0)

  const items = [
    { id: 1, name: "토마토", price: 5 },
    { id: 2, name: "파스타", price: 30 },
    { id: 3, name: "코코넛", price: 7 },
  ]

  const render = items.map((item) => {
    return (
      <div key={item.id}>
        {item.name} ${item.price}
        <div>수량: {count}</div>
        <button onClick={() => setCount(count + 1)}>추가</button>
      </div>
    )
  })

  return (
    <div>
      <Title text="상품목록" />
      <div>{render}</div>
    </div>
  )
}
