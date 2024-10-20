import "./App.css";
import { useState } from "react";
import Movies from "./components/Movies";
import Count from "./components/Count";

export default function App() {
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isCountOpen, setIsCountOpen] = useState(false);

  const open = (target) => {
    if (target === "movies") {
      setIsMoviesOpen(!isMoviesOpen);
      setIsCountOpen(false);
    } else if (target === "count") {
      setIsCountOpen(!isCountOpen);
      setIsMoviesOpen(false);
    }
  };

  return (
    <div className="App">
      <button onClick={() => open("movies")}>Movies</button>
      <button onClick={() => open("count")}>Count</button>
      <div>{isMoviesOpen && <Movies />}</div>
      <div>{isCountOpen && <Count />}</div>
    </div>
  );
}
