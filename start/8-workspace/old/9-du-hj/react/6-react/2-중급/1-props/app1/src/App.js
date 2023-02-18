import React from 'react'
import './App.css'
import Counter from './Counter'
import { useState } from 'react'

export default function App () {
  // JS
  const [count, setCount] = useState(0)

  // XML
  return (
    <div>
      Hello React!
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
    </div>
  )
}
