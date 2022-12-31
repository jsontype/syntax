import React from 'react';
import './App.css';
import Hello from './Hello'

function App() {
  const name = "양"
  const language = "ko"

  return (
    <div className="App">      
      <Hello name={name} language={language} />
    </div>
  );
}

export default App;
