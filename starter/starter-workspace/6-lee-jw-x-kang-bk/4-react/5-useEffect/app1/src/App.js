import React, { useState, useEffect } from 'react'
import Counter from './Counter'

function App() {
  // State 선언 : const isCounter = false
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => {
    // State 변경 : isCounter = true
    setIsCounter(!isCounter)
  }

  useEffect(() => { console.log('Updated(isCounter): ', isCounter) }, [isCounter])

  return (
    <>
      <button onClick={onClick}>{ isCounter ? 'On' : 'Off' }</button>
      { isCounter && <Counter /> }
    </>
  )
}

export default App
