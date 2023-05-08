import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import CounterContainer from './containers/CounterContainer'

function App () {
    return (
        <>
            <CounterContainer />
            <Routes>
                <Route path="/" element={<PostListPage />} exact={true}>
                <Route path=":id" element={<PostPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
