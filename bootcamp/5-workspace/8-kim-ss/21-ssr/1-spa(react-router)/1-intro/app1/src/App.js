import "./App.css";
import About from "./About";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      {/* 2. Route를 통해, 각 Link를 통해 받아온 path에 컴포넌트를 연결한다. 모든 Route들은 Routes 컴포넌트 안에 넣어야 한다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
