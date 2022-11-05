import React from 'react'
import './App.css'
import Counter from './Counter'
import Login from './Login'

const App: React.FC = () => {
  const onSubmit = (form: {id: string, pw: string}) => {
    console.log(form)
  }

  return (
    <div className="App">
      Hello react!
      <Counter />
      <Login onSubmit={onSubmit} />
    </div>
  )
}

export default App