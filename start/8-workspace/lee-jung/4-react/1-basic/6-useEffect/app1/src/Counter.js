import { useState, useEffect } from "react"

export default function Counter() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    alert("mounting")
  }, []) // Deps가 빈 배열 : mounting 시점에 실행

  useEffect(() => {
    alert("updating: ", number)
  }, [number]) // Deps가 number : number가 updating되는 시점에 실행

  useEffect(() => {
    return () => {
      alert("unmounting")
    }
  }, []) // Deps가 빈 배열 + 리턴 안에 실행문을 넣은 경우 : unmounting 시점에 실행

  return (
    <div>
      <div>Count: {number}</div>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  )
}
