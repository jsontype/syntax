import "./App.scss"
import Button from "./components/Button"
import TextBox from "./components/TextBox"

export default function App() {
  return (
    <div className="App">
      <div>Hello React!</div>
      <Button />
      <TextBox text="안녕하세요" />
    </div>
  )
}
