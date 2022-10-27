import React from 'react'
// import Counter from './Counter'
import Login from './Login'

const App: React.FC = () => {
    const onSubmit = (form: { id: string, pw: string }) => {
        console.log(form)
    }

    return <Login onSubmit={onSubmit} />
}

export default App
