import "./App.css"
import { memo, useMemo, useState } from "react"

const double = (count) => {
  let i = 0
  while (i < 2000000000) i++
  console.log("Double 함수를 실행했음")
  return count * 2
}

// 컴포넌트를 메모하는 방법
const Count2 = memo((props) => {
  let i = 0
  while (i < 2000000000) i++
  console.log("Count2 앱을 열었음")
  return <p>count2 : {props.count}</p>
})

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  // 값을 메모하는 방법
  // const doubledCount = double(count3)
  const doubledCount = useMemo(() => double(count3), [count3])

  // 함수를 메모하는 방법
  const onClick = () => {
    setCount2(count2 + 1)
  }

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>count1 +</button>
      <button onClick={onClick}>count2 +</button>
      <button onClick={() => setCount3(count3 + 1)}>count3 +</button>
      <p>count1 : {count1}</p>
      <Count2 count={count2} />
      <p>count3 : {doubledCount}</p>
    </div>
  )
}
