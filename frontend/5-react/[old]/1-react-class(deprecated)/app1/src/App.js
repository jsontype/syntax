import React from "react"
import Counter from "./Counter"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <h2>카운터 앱</h2>
        <Counter />
      </div>
    )
  }
}

export default App
