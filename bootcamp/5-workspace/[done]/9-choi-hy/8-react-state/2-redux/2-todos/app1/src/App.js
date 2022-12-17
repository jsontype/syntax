import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import TodosContainer from "./components/Todos/TodosContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
