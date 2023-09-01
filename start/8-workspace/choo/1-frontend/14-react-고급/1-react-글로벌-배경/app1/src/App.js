import { useState } from "react"
import Counter from "./Counter"

function App() {
  const [count, setCount] = useState(0) // 로컬 스테이트

  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => {
    setIsCounter(!isCounter)
  }

  return (
    <>
      <button onClick={onClick}>{isCounter ? "On" : "Off"}</button>
      {isCounter && <Counter count={count} setCount={setCount} />}
      {isCounter && <Counter count={count} setCount={setCount} />}
      {isCounter && <Counter count={count} setCount={setCount} />}
      {isCounter && <Counter count={count} setCount={setCount} />}
      {isCounter && <Counter count={count} setCount={setCount} />}
      {isCounter && <Counter count={count} setCount={setCount} />}

      {/* {isCounter && <Counter />}
      {isCounter && <Counter />}
      {isCounter && <Counter />}
      {isCounter && <Counter />}
      {isCounter && <Counter />}
      {isCounter && <Counter />} */}
    </>
  )
}

export default App
