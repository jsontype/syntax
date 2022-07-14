import React, { useState, useCallback } from "react"

const Child = React.memo(props => {
  console.log("render Child")
  return <button onClick={props.handleClick}>Child</button>
})

export default function App() {
  console.log("render App")
  const [count, setCount] = useState(0)

  // After: 아래처럼 함수를 유즈콜백으로 메모화시키면, 신, 구 handleClick는 동일한 값을 갖게 되어, Child 컴포넌트는 재렌더링되지 않는다.
  const handleClick = useCallback(() => { console.log("click") }, [])

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  )
}
