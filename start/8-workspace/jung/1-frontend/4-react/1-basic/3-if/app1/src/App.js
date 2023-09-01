import Hello from "./Hello"

function App() {
  // JS
  const userName = "양"
  const mark = "!"

  // XML
  return (
    <div className="App">
      <header className="App-header">
        <Hello userName={userName} mark={mark} isMoney isSpecial />
        <Hello userName={userName} mark={mark} isSpecial />
        <Hello userName={userName} mark={mark} isMoney />
        <Hello userName={userName} mark={mark} />
        <Hello />
      </header>
    </div>
  )
}

export default App
