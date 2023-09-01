import Hello from "./Hello"

function App() {
  // JS
  const userName = "양"
  const mark = "?"

  // XML
  return (
    <div className="App">
      <header className="App-header">
        <Hello userName={"박"} mark={mark} />
        <Hello userName={"김"} mark={mark} />
        <Hello userName={userName} mark={mark} />
        <Hello userName={userName} mark={mark} />
        <Hello userName={userName} mark={mark} />
        <Hello />
      </header>
    </div>
  )
}

export default App
