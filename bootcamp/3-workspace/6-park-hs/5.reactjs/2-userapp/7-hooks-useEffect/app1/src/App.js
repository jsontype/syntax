import React, { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => {
    setIsCounter(isCounter => !isCounter)
  }

  return (
    <>
      <button onClick={onClick}>{ isCounter ? 'On' : 'Off' }</button>
      {/* isCounter가 있을 때만 아래 태그를 켠다. */}
      { isCounter && <Counter/> }
    </>
  )
}

export default App
