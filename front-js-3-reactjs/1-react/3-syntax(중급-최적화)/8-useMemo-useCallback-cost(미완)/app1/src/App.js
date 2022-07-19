import React, { useState, useMemo } from "react"

export default function App() {
  // App 컴포넌트 렌더링
  console.log("render App")
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const double = count => {
    let i = 0
    while (i < 3000000000) i++
    return count * 2
  }

  // 재렌더링 비용 < useMemo 실행비용
  const result1 = useMemo(() => {
    console.log("render Counter")
    const doubledCount = count2 * 2
    return (
      <p>Counter: {count2}, {doubledCount}</p>
    )    
  }, [count2])
  
  // 재렌더링 비용 > useMemo 실행비용
  const result2 = useMemo(() => {
    console.log("render Counter")
    const doubledCount = double(count2)
    return (
      <p>Counter: {count2}, {doubledCount}</p>
    )
  }, [count2])

  return (
    <>
      {/* App 컴포넌트 마운팅 */}
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      {/* App 컴포넌트 안의 Counter 컴포넌트 마운팅 */}
      <h2>Increment count2</h2>
      {Counter}
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  )
}
