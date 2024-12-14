import "./App.css"
import NavBar from "./components/atoms/NavBar"
import Home from "./components/models/Home"
import Movies from "./components/models/Movies"
import Todos from "./components/models/Todos"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  )
}
