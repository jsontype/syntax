import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

/* 
  createGlobalStyle 함수
    정의 : styled-components에서 글로벌 스타일링을 추가하고 싶을 때 사용하는 함수이다.
    사용방법 : createGlobalStyle 함수를 사용하면 컴포넌트가 만들어지는데, 이 컴포넌트를 렌더링하면 된다.
*/
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  )
}

export default App
