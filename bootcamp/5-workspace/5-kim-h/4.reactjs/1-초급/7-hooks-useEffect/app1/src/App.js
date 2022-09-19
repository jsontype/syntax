// CSS
import { useState } from 'react'
import Counter from './Counter'
import './App.css'

function App() {
  // JS
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => {
    setIsCounter(!isCounter)
  }

  // XML
  return (
    <div className='app'>
      <button onClick={onClick}>{ isCounter ? 'On' : 'Off' }</button>
      { isCounter && <Counter /> }
    </div>
  )
}

export default App
