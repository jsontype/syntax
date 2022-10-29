import { useState } from 'react'
import './App.css'
import Counter from './Counter'

export default function App () {
  // JS
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => { setIsCounter(!isCounter) } // 1, 8

  // XML
  return (    
    <div className="App">
      <button onClick={onClick}>스위치</button>
      {/* 2 */}
      { isCounter && <Counter /> } 
    </div>
  )
}
