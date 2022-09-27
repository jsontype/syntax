import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import './App.css'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          {/* 1. Link를 통해, 누르면 to의 값을 router의 path로 전달한다. react-router-dom를 쓰는 XML의 <Link to="">는 HTML의 <A href="">와 같다. */}
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      {/* 2. Route를 통해, 각 Link를 통해 받아온 path에 컴포넌트를 연결한다. 모든 Route들은 Routes 컴포넌트 안에 넣어야 한다. */}
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
