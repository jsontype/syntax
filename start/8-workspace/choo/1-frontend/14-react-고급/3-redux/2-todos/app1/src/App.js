import "./App.css"
// 8. Counter 대신, CounterContainer를 불러온다.
import CounterContainer from "./CounterContainer"
import TodosContainer from "./TodosContainer"

export default function App() {
  return (
    <div className="App">
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <TodosContainer />
      <TodosContainer />
      <TodosContainer />
      <TodosContainer />
    </div>
  )
}
