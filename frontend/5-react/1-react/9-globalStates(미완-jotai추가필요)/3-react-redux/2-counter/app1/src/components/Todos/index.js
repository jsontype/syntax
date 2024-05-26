import React from "react"
import { useSelector } from "react-redux"

export default function Todos() {
  const count = useSelector(
    // Global State를 조회할 때에는 state의 타입을 RootState로 지정해야 한다.
    (state) => state.counter.count
  )

  return (
    <>
      <h1>Todos</h1>
      <h2>Todos 안에서의 Count: {count}</h2>
    </>
  )
}
