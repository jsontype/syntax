import React from 'react';
import './App.css';
import Hello from './Hello'
import Counter from './Counter'

function App() {
  const name = "양"
  const language = "ko"

  return (
    <div className="App">      
      <Hello name={name} language={language} />
      <Counter />
    </div>
  );
}

export default App;
