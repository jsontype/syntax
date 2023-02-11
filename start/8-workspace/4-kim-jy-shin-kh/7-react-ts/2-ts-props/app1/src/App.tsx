import React from 'react'
import Hello from './Hello'
import './App.css'

function App() {
    return (
        <div className="App">
            Hello React
            <Hello name={'양'} />
            <Hello name={'김'} marker={'!'} age={50} />
        </div>
    )
}

export default App
