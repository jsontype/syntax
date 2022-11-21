import "./App.css";
import Circle from "./Circle";
import ButtonList from "./ButtonList";

function App() {
  return (
    <div className="App">
      <Circle color="red" />
      <Circle color="orange" />
      <Circle color="blue" />
      <Circle />
      <Circle huge color="pink" />

      <ButtonList />
    </div>
  );
}

export default App;
