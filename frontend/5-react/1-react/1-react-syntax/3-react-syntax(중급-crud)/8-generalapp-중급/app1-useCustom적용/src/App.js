import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Count from "./pages/Count"
import News from "./pages/News"
import Todos from "./pages/Todos"

export default function App() {
  return (
    <div className="m-[20px]">
      <span>
        <Link to="/">Home</Link>/
      </span>
      <span>
        <Link to="/movie">Movies</Link>/
      </span>
      <span>
        <Link to="/count">Count</Link>/
      </span>
      <span>
        <Link to="/news">News</Link>/
      </span>
      <span>
        <Link to="/todos">Todos</Link>
      </span>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/count" element={<Count />} />
        <Route path="/news" element={<News />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  )
}
