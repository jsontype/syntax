import "./App.css"
import CounterContainer from "./components/Counter/Container"
import TodosContainer from "./components/Todos/Container"

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  )
}

export default App
