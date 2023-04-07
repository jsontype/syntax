import "./App.css"
import Button from "./components/Button"
import Circle from "./components/Circle"

export default function App() {
  return (
    <div className="App">
      Hello React
      <Circle color="red" />
      <Circle color="blue" />
      <Circle color="pink" huge />
      <Circle color="gray" huge />
      <Circle />
      <Button color="red">버튼</Button>
      <Button color="blue">버튼</Button>
      <Button color="pink">버튼</Button>
      <Button color="pink" size="200px">
        버튼
      </Button>
      <Button color="pink" huge>
        버튼
      </Button>
      <Button color="pink" size="400px">
        버튼
      </Button>
    </div>
  )
}
