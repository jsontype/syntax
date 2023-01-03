import React, { useState } from 'react'
import Counter from './Counter'
import './App.css'

export default function App() {
  // JS
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => {
    setIsCounter(!isCounter)
  }

  // XML
  return (
    <>
      { isCounter && <Counter /> }
      <button onClick={onClick}>버튼</button>
    </>
  )
}
