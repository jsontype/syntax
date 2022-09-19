import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count: ', count)
  }, [count])

  const addCount = () => setCount(count + 1)

  return (
    <div className='App'>
      <h1>useEffect</h1>
      <button onClick={addCount}>Click!</button>
    </div>
  )
}

export default App;
