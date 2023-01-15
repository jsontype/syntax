import React from 'react'
import Login from './Login'

const App: React.FC = () => {
    const onSubmit = (form: { id: string, pw: string }) => {
        // TODO: 이곳에 Submit의 처리가 들어갈 것이다.
        console.log(form)
    }
    return <Login onSubmit={onSubmit} />
}

export default App
