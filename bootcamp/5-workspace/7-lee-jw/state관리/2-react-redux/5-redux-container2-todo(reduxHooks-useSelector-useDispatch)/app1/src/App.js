import React from 'react'
import CounterContainer from './components/Counter/CounterContainer'
import TodosContainer from './components/Todos/TodosContainer'

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App
