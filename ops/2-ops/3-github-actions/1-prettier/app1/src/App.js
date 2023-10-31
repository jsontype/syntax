import './App.css'

export default function App() {
  const onClick = text => {
    console.log(text)
  }

  return (
    <div className="App">
      <div
        onClick={() => {
          onClick("Hello React!")
        }}
        style={{ color: 'gray' }}
      >
        Hello React!
      </div>
    </div>
  )
}
