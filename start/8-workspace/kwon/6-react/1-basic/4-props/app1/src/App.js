import "./App.css"
import Hello from "./components/Hello"

export default function App() {
  // JS
  const name1 = "Yang"
  const name2 = "Kim"
  const name3 = "Kwon"

  // XML
  return (
    <div className="app">
      <Hello name={name1} />
      <Hello name={name2} />
      <Hello name={name3} />
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}
