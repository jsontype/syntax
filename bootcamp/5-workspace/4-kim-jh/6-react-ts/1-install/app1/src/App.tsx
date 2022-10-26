import React from 'react'
import './App.css'
import Greetings from './Greetings'

const App: React.FC = () => {
  const name = 'Yang'
  const language = 'ko'

  return (
    <div className="App">
      Hello React-ts!
      <Greetings name={name} language={language} />
    </div>
  )
}

export default App
