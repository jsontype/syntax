import React from 'react'
import Counter from './components/Counter'

function App() {
  return (
    <div className='App'>
      <h1>Props</h1>
      <Counter click='변경된 버튼'/>
      <Counter />
      <Counter />
    </div>
  );
}

export default App
