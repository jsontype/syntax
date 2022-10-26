import React from 'react'
import './App.css'
import Counter from './Counter'
import Login from './Login'

const App: React.FC = () => {
  const onSubmit = (form: { id: string, pw: string }) => {
      // TODO: 이곳에 Submit의 처리가 들어갈 것이다.
      console.log(form)
  }

  return (
    <div className="App">
      Hello React-ts!
      <Login onSubmit={onSubmit} />
      <Counter />
    </div>
  )
}

export default App
