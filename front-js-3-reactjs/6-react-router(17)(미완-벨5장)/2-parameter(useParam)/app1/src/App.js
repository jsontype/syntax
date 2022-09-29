import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import './App.css'
// 프로필 임포트
import Profile from './Profile'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 프로필 사용 : 아래 path 규칙대로 넣으면 Profile 컴포넌트에서 match props를 통하여 값을 전달받게 된다. */}
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
