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

  // App 컴포넌트 안의 Counter 컴포넌트 렌더링
  const Counter = useMemo(() => {
    console.log("render Counter")
    const doubledCount = double(count2)
    return (
    <p>
        Counter: {count2}, {doubledCount}
    </p>
    )
  }, [count2])

  // - C in C에서는 서브컴포넌트에 함수를 넣으면 안된다. useMemo를 써야한다.
  // const Counter = () => {
  //     console.log("render Counter")
  //     const doubledCount = double(count2)
  //     return (
  //     <p>
  //         Counter: {count2}, {doubledCount}
  //     </p>
  //     )
  // }

  // - C in C에서는 서브컴포넌트에 React.memo를 넣으면 안된다. useMemo를 써야한다.
  // const Counter = React.memo(props => {
  //     console.log("render Counter")
  //     const doubledCount = double(props.count2)
  //     return (
  //       <p>
  //         Counter: {props.count2}, {doubledCount}
  //       </p>
  //     )
  // })

  return (
    <>
      {/* App 컴포넌트 마운팅 */}
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      {/* App 컴포넌트 안의 Counter 컴포넌트 마운팅 */}
      {Counter}
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  )
}
