import './App.css'
import Counter from './Counter'
import { useState } from 'react'

function App() {
  // JS
  const [count, setCount] = useState(0)

  // XML
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
    </div>
  )
}

export default App
