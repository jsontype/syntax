import "./App.css"
import Hello from "./Hello"

// JSX 문법
export default function App() {
  // JS
  const name = "AAA"
  const mark = "?"

  // XML
  return (
    <div className="App">
      <Hello name={name} mark={mark} isSpecial isMoney />
      <Hello name={name} mark={mark} isMoney />
      <Hello name={name} />
    </div>
  )
}
