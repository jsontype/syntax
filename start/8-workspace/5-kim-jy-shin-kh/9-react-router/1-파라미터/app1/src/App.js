import "./App.css"
import Home from "./Home"
import About from "./About"
import Profiles from "./Profiles"
import Profile from "./Profile"
import { Routes, Route, Link } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> / <Link to="/about">About</Link> /{" "}
      <Link to="/profiles">Profiles</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profiles" element={<Profiles />}></Route>
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  )
}
