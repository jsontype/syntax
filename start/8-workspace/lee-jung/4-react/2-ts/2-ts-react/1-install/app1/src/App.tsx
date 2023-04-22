import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const name: string = "Josh Perez"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </header>
    </div>
  )
}

export default App
