import React from 'react'
import Users from './Users'
import { UsersProvider } from './UsersContext'

function App () {
  return (
    // Context를 사용하기 위해서, App 컴포넌트를 UsersProvider로 감싸준다.
    <UsersProvider>
      <Users />
    </UsersProvider>
  )
}

export default App
