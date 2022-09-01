import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'

function App() {
  const [bool, setBool] = useState(false)
  const toggle = () => {
    setBool(!bool)
  }
  const text = bool ? 'true' : 'false'

  return (
    <div className='App'>
      <h1>조건 렌더링</h1>
      <div>
        {text}
      </div>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default App;
