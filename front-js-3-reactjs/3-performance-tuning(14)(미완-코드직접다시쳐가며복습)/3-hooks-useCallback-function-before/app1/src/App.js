import React, { useState } from "react"

const Child = React.memo(props => {
  console.log("render Child")
  return <button onClick={props.handleClick}>Child</button>
})

export default function App() {
  console.log("render App")
  const [count, setCount] = useState(0)

  // Before: 아래처럼 함수가 들어있다면, Child 컴포넌트가 설령 React.memo화 되어있다 하더라도, 함수가 렌더링 되므로 Child 컴포넌트도 재렌더링이 되어버린다.
  const handleClick = () => { console.log("click") }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  )
}
