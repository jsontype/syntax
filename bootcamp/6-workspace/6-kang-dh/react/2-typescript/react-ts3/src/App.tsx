import React from 'react'
import './App.css'
import Title from './Components/Title'
import Hello from './Components/Hello'
import Counter from './Components/Counter'
import Login from './Components/Login'

const App: React.FC = () => {
  const name = "Yang"
  const language = "en"

  const onSubmit = (form: { id: string, pw: string }) => {    
    alert(form.id + '님, 로그인 완료!')
  }

  return (
    <div className="App">
      <Title />
      <Hello name={name} language={language} />
      <Counter />
      <Login onSubmit={onSubmit} />
    </div>
  )
}

export default App