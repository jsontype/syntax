import React, { useState, useMemo } from "react"

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // 파라미터의 수치를 2배로 해서 리턴한다.
  // 불필요한 루프를 실행해서, 계산에 시간이 꽤 걸리는 상태이다.
  const double = count => {
    let i = 0
    while (i < 3000000000) i++
    console.log('run double')
    return count * 2
  }

  // 현재의 상황:
  // count2를 참조하는 doubledCount를 메모화해서 count1을 변경할 때에는 count2가 발생하지 않도록 했다.

  // count2를 2배로 한 수치
  const doubledCount = useMemo(() => double(count2), [count2])

  return (
    <>
      <h2>Increment(fast)</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment(fast)</button>

      <h2>Increment(slow)</h2>
      <p>Counter: {count2}, {doubledCount}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment(slow)</button>
    </>
  )
}
