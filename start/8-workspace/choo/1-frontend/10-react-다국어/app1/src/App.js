import "./App.css"
import Hello from "./Hello"
import About from "./About"
import ChangeLng from "./ChangeLng"

export default function App() {
  return (
    <div className="App">
      <ChangeLng />
      <Hello />
      <About />
    </div>
  )
}
