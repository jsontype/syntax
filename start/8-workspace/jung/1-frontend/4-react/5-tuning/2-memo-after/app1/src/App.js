import "./App.css"
import { memo, useState } from "react"

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

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>count1 +</button>
      <button onClick={() => setCount2(count2 + 1)}>count2 +</button>
      <p>count1 : {count1}</p>
      <Count2 count={count2} />
    </div>
  )
}
