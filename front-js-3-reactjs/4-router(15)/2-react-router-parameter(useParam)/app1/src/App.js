import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import './App.css'
// 프로필 임포트
import Profile from './Profile'
// 프로필리스트 임포트
import Profiles from './Profiles'

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
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 프로필 페이지 호출 : 아래 path 규칙대로 넣으면 Profile 컴포넌트에서 match props를 통하여 값을 전달받게 된다. */}
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        {/* 프로필리스트 페이지 호출 */}
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  )
}

export default App
