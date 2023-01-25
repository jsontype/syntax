import React from 'react'
import './App.css'
import Greeting from './Greeting'
import Hi from './Hi'

const App: React.FC = () => {
  const name = "양"
  const language = "ko"

  return (
    <div className="App">
      Hello react!
      <Greeting name={name} language={language} />
      <Hi />
    </div>
  )
}

export default App