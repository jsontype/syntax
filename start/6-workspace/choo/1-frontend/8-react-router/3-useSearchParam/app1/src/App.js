import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Profile from "./Profile"
import Profiles from "./Profiles"

export default function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">홈</Link>
        {" / "}
        <Link to="/about">소개</Link>
        {" / "}
        <Link to="/profiles">프로필</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  )
}
