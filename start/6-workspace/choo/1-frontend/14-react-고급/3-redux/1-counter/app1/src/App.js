import "./App.css"
// 8. Counter 대신, CounterContainer를 불러온다.
import CounterContainer from "./CounterContainer"
import Todos from "./Todos"

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
      <Todos />
    </div>
  )
}
