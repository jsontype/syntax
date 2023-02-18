import "./App.css";
import CounterContainer from "./components/Counter/container";
import TodosContainer from "./components/Todos/container";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
