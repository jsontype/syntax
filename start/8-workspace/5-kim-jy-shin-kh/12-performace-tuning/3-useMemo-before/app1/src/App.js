import React, { useState } from "react"

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // 파라미터의 수치를 2배로 해서 리턴한다.
  // 불필요한 루프를 실행해서, 계산에 시간이 꽤 걸리는 상태이다.
  const double = (count) => {
    let i = 0
    while (i < 3000000000) i++
    console.log("run double")
    return count * 2
  }

  // 현재의 상황:
  // double(count2)는 컴포넌트가 재렌더링되는 사이에 실행되기 때문에,
  // count1만 변경해서 컴포넌트가 재렌더링된 때에도 double(count2)까지 실행되버린다.
  // count1을 변경한다고 해서, doubledCount는 변경되지 않으므로,
  // count1가 변경되어서, 컴포넌트가 재렌더링되었을 때는 double(count2)는 실행하지 않도록 하고 싶다.

  // count2를 2배로 한 수치
  const doubledCount = double(count2)

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  )
}
