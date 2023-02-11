import React, { useState } from 'react'
import Counter from './Counter'
import './App.css'

export default function App() {
    const [count, setCount] = useState<number>(0)

    return (
        <div className="App">
            <Counter count={count} setCount={setCount} />
        </div>
    )
}
