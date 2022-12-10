import React from 'react'
// react-dom 라이브러리로부터 ReactDOM 클래스를 임포트한다.
import ReactDOM from 'react-dom'
// react-router-dom 라이브러리로부터 BrowserRouter 컴포넌트 함수를 임포트한다.
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  // App을 BrowserRouter로 감싸면 라우터를 사용할 수 있게 된다.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
