import "./App.css";
import Movies from "./components/Movies";
import Hello from "./components/Hello";

export default function App() {
  const username = "Yang";
  const mark = "?";

  return (
    <div className="App">
      <Hello name={username} mark={mark} />
      <Movies name="Saito" />
      <Movies name="Yamamoto" />
      <Movies name="Yang" />
    </div>
  );
}
