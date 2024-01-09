import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'

function App () {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} exact={true}>
        <Route path=":id" element={<PostPage />} />
      </Route>
    </Routes>
  )
}

export default App
