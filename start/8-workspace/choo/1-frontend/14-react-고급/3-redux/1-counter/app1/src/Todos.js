import React from "react"
import { useSelector } from "react-redux"

export default function Todos() {
  const count = useSelector((state) => state.counter.count)

  return (
    <>
      <h1>Todos</h1>
      <h2>Todos 안에서의 Count: {count}</h2>
    </>
  )
}
