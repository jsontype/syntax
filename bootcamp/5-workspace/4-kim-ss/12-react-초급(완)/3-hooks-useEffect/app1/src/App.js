import './App.css'
import Counter from './Counter'
import React, { useState } from 'react'

export default function App () {
  // JS
  const [isCounter, setIsCounter] = useState(false)
  
  const onClick = () => {
    setIsCounter(!isCounter)
  }

  // XML
  return (
    <div className="App">
      <button onClick={onClick}>스위치</button>
      {isCounter && <Counter />}
    </div>
  )
}
