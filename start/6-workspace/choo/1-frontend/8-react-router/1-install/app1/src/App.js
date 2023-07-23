import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import About from "./About"
import Home from "./Home"

export default function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">홈</Link>
        {" / "}
        <Link to="/about">소개</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
