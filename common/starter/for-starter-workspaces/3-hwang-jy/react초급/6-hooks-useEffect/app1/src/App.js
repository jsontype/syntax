// CSS
import { useState } from 'react'
import Counter from './Counter'
import './App.css'

export default function App() {
  // JS
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => { setIsCounter(!isCounter) }

  // HTML
  return (
    <div className="user">
      <button onClick={onClick}>{ isCounter ? 'On' : 'Off' }</button>
      { isCounter && <Counter /> }
    </div>
  )
}
