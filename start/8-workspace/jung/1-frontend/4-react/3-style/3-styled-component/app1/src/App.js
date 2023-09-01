import { useState } from "react"
import Circle from "./style.js"

export default function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <div>Hello React!</div>
      <div onClick={() => setToggle(!toggle)}>
        <Circle color={toggle ? "blue" : "red"} />
        <Circle color={toggle ? "blue" : "red"} huge />
        <Circle color={toggle ? "blue" : "red"} />
        <Circle color={toggle ? "blue" : "red"} huge />
        <Circle color={toggle ? "blue" : "red"} />
        <Circle color={toggle ? "blue" : "red"} huge />
        <Circle color={toggle ? "blue" : "red"} />
      </div>
    </div>
  )
}
