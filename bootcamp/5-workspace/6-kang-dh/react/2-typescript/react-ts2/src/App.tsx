import React from 'react'
import './App.css'
import Title from './Components/Title'
import Hello from './Components/Hello'
import Counter from './Components/Counter'

const App: React.FC = () => {
  const name = "Yang"
  const language = "en"

  return (
    <div className="App">
      <Title />
      <Hello name={name} language={language} />
      <Counter />
    </div>
  )
}

export default App