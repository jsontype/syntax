import "./App.css";
import { useState } from "react";
import Movies from "./components/Movies";
import Count from "./components/Count";
import News from "./components/News";
import Todos from "./components/Todos";

export default function App() {
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isCountOpen, setIsCountOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isTodosOpen, setIsTodosOpen] = useState(false);

  const open = (target) => {
    if (target === "movies") {
      reset();
      setIsMoviesOpen(true);
    } else if (target === "count") {
      reset();
      setIsCountOpen(true);
    } else if (target === "news") {
      reset();
      setIsNewsOpen(true);
    } else if (target === "todos") {
      reset();
      setIsTodosOpen(true);
    }
  };

  const reset = () => {
    setIsMoviesOpen(false);
    setIsCountOpen(false);
    setIsNewsOpen(false);
    setIsTodosOpen(false);
  };

  return (
    <div className="App">
      <button onClick={() => open("movies")}>Movies</button>
      <button onClick={() => open("count")}>Count</button>
      <button onClick={() => open("news")}>News</button>
      <button onClick={() => open("todos")}>Todos</button>
      <div>{isMoviesOpen && <Movies />}</div>
      <div>{isCountOpen && <Count />}</div>
      <div>{isNewsOpen && <News />}</div>
      <div>{isTodosOpen && <Todos />}</div>
    </div>
  );
}
