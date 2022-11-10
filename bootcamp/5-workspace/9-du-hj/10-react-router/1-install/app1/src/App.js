import React from 'react'
import './App.css'
import About from './About'
import Home from './Home'

// 3. 라우팅에 필요한 3개의 함수를 임포트
import { Routes, Route, Link } from 'react-router-dom'

export default function App () {
  // JS

  // XML
  return (
    <div>
      <Link to="/">홈</Link> /&nbsp;
      <Link to="/about">소개</Link>

      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  )
}
