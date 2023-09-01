import "./App.css"
import Circle from "./components/Circle"
import Button from "./components/Button"

export default function App() {
  return (
    <div className="App">
      <div>Hello React!</div>
      <Circle huge color="blue" />
      {/* <Circle color="red" />
      <Circle color="orange" />
      <Circle color="purple" />
      <Circle /> */}
      <Button color="black">Click me</Button>
      <Button color="red">Click me</Button>
      <Button color="black" size="200px">
        Click me
      </Button>
      <Button color="black" huge>
        Click me
      </Button>
    </div>
  )
}
