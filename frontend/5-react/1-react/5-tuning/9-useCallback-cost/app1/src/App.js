import React, { useState, useCallback } from "react"

{/* 주석토글 1, 2의 경우 */}
const Child = React.memo(props => {
  // Child 컴포넌트가 열리는 데 연산이 별로 필요 없는 경우라고 가정해보자.
  console.log("render Child")  
  return <button onClick={props.handleClick}>Child</button>
})

{/* 주석토글 3, 4의 경우 */}
// const Child = React.memo(props => {
//   // Child 컴포넌트가 열리는데 많은 연산을 필요로 하는 경우라고 가정해보자.
//   for (let i = 0; i < 8000; i++) { console.log("render Child") }  
//   return <button onClick={props.handleClick}>Child</button>
// })



export default function App() {
  console.log("render App")
  const [count, setCount] = useState(0)

  // <주석 토글 1> : "Child 재렌더링 비용 <= useCallback 실행비용"이므로 1->2로 가는 것이 의미가 없다.
  const handleClick = () => { console.log("click") }

  // <주석 토글 2> : "Child 재렌더링 비용 <= useCallback 실행비용"이므로 1->2로 가는 것이 의미가 없다.
  // const handleClick = useCallback(() => { console.log("click") }, [])

  // <주석 토글 3> : "Child 재렌더링 비용 >>> useCallback 실행비용"이므로 3 ->4로 가서 useCallback을 사용하면 큰 효과를 얻을 수 있다.
  // const handleClick = () => { console.log("click") }

  // <주석 토글 4> : "Child 재렌더링 비용 >>> useCallback 실행비용"이므로 3 ->4로 가서 useCallback을 사용하면 큰 효과를 얻을 수 있다.
  // const handleClick = useCallback(() => { console.log("click") }, [])



  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  )
}
