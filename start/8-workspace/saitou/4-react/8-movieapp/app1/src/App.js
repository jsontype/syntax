import "./App.css";
import { useState } from "react";
import Movies from "./components/Movies";

export default function App() {
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsMoviesOpen(!isMoviesOpen)}>Movies</button>
      <div>{isMoviesOpen && <Movies />}</div>
    </div>
  );
}
