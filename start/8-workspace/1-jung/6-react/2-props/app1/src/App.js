import "./App.css"
import Hello from "./Hello"

// JSX 문법
export default function App() {
  // JS
  const name = "AAA"
  const mark = "?"

  // XML
  return (
    <div>
      <Hello name={name} mark={mark} />
    </div>
  )
}
