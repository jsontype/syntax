// CSS 임포트
import "./App.css"

function App() {
  // JS 로직
  const name = "Yang"
  const hello = () => {
    console.log("hello")
  }

  // HTML 돔
  return (
    <div className="app">
      <div className="hello">
        <div>{name}</div>
        <button onClick={hello}>클릭</button>
      </div>
    </div>
  )
}

export default App
