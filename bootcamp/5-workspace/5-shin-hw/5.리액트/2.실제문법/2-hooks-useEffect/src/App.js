import React, { useState } from 'react'
import Counter from './Counter'
import './App.css'

export default function App() {
  const [isCounter, setIsCounter] = useState(false)
  const onClick = () => { setIsCounter(!isCounter) }

  return (
    <>
      <button onClick={onClick}>{ isCounter ? 'On' : 'Off' }</button>
      { isCounter && <Counter /> }
    </>
  )
}
