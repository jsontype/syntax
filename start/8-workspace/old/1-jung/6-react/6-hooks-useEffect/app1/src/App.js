import "./App.css"
import { useState } from "react"
import Counter from "./Counter"

// JSX 문법
export default function App() {
  // JS
  const [number, setNumber] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber(number - 1)
  }

  const onOpen = () => {
    setIsOpen(!isOpen)
  }

  // XML
  return (
    <div className="App">
      <button onClick={onOpen}>카운터앱</button>

      {isOpen && (
        <Counter
          number={number}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}
    </div>
  )
}
