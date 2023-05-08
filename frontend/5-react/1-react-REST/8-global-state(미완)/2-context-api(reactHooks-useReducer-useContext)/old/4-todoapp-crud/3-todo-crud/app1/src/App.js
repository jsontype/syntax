import React from 'react'
// styled-components에서 글로벌 스타일링을 추가하고 싶을 때 사용하는 함수
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
// todo 앱의 global state를 관리해 줄 Context
import { TodoProvider } from './TodoContext'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    // 프로젝트 모든 곳에서 Todo 관련 Context 들을 사용 할 수 있도록, App의 모든 내용을 TodoProvider로 감싸준다.
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  )
}

export default App
