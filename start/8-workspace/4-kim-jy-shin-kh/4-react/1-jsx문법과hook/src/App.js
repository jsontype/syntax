import "./App.css"
import { useState } from "react"
import Counter from "./components/Counter"

export default function App() {
  // JS
  const [isOpen, setIsOpen] = useState(false)

  // XML
  return (
    <div className="App">
      <div>Hello React!</div>
      <button onClick={() => setIsOpen(!isOpen)}>열기</button>
      {isOpen && <Counter />}
    </div>
  )
}
