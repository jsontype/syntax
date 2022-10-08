import React from 'react'
import Hello from './Hello'
import './App.css'

function App() {  
  return (
    <div className="App">
      <Hello />
      <div className="gray-box">
        <Hello />
      </div>
    </div>
  );
}

export default App;
