import React, { useState, memo, useCallback } from "react"

const Child = memo((props) => {
  let i = 0
  while (i < 3000000000) i++
  console.log("render Child")
  return <button onClick={props.onClick}>Child: {props.count}</button>
})

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // ★★ 함수 메모화
  // 아래처럼 함수를 유즈콜백으로 메모화시킨다.
  // 그러면, 신, 구 onClick이 동일한 값을 가지는 한, Child 컴포넌트는 재렌더링되지 않는다.
  // 정리하자면,
  // useCallback은 컴포넌트 재렌더링을 memo로 하는 동안에 함수를 props로 넘겨주는 경우에,
  // useMemo는 컴포넌트 재렌더링을 memo로 하는 동안에 값을 props로 넘겨주는 경우, 함께 곁들여 사용한다.
  const onClick = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>App: {count1}</button>
      <Child onClick={onClick} count={count2} />
    </>
  )
}

export default App
