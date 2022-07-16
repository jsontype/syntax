// CSS
import './App.css'
import Hello from './Hello'

function App() {
  //JS
  const name = 'Kim'
  const position = 'Dev'

  // HTML
  return (
    <>
      {name}
      <Hello pos={position} user={name} />
    </>
  )
}

export default App
