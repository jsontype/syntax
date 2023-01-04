import React from 'react'
import './App.css'
import About from './About'
import Home from './Home'
import Profiles from './Profiles'
import Profile from './Profile'

// 3. 라우팅에 필요한 3개의 함수를 임포트
import { Routes, Route, Link } from 'react-router-dom'

export default function App () {
  // JS

  // XML
  return (
    <div>
      <Link to="/">홈</Link> /&nbsp;
      <Link to="/about">소개</Link> /&nbsp;
      <Link to="/profiles">프로필목록</Link>

      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  )
}
