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



  // <주석토글 1-1 Start>
  const Counter = (count2) => {
    console.log("render Counter")
    const doubledCount = count2 * 2
    return (
      `Counter: ${count2}, ${doubledCount}`
    )
  }
  // <주석토글 1-1 End>

  // <주석토글1-2 Start> : "재렌더링 비용 <= useMemo 실행비용"이므로 하는 것이 의미가 없다.
  // const Counter = useMemo(() => {
  //   console.log("render Counter")
  //   const doubledCount = count2 * 2
  //   return (
  //     <p>Counter: {count2}, {doubledCount}</p>
  //   )
  // }, [count2])
  // <주석토글1-2 End>
  



  // <주석토글 2-1 Start>
  // const Counter = (count2) => {
  //   console.log("render Counter")
  //   const doubledCount = double(count2)
  //   return (
  //     `Counter: ${count2}, ${doubledCount}`
  //   )
  // }
  // <주석토글 2-1 End>

  // <주석토글2-2 Start> : "재렌더링 비용 > useMemo 실행비용"이므로 분명히 재렌더링 비용이 높기 때문에 useMemo를 사용하면 큰 효과를 얻을 수 있다.
  // const Counter = useMemo(() => {
  //   console.log("render Counter")
  //   const doubledCount = double(count2) // 이것 때문에 하는 게 더 낫다.
  //   return (
  //     <p>Counter: {count2}, {doubledCount}</p>
  //   )
  // }, [count2])
  // <주석토글2-2 End>

  

  return (
    <>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      {/* 주석토글 1-1, 2-1 */}
      <p>{Counter(count2)}</p>
      {/* 주석토글 1-2, 2-2 */}
      {/* {Counter} */}
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  )
}
