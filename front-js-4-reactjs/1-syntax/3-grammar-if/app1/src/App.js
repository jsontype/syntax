import './App.css'
import Hello from './Hello'

function App() {  
  const name = 'Hwang'
  const mark = '!'

  return (
    <div className="hello">
      <Hello />
      <Hello />
      <Hello isMoney />
      <Hello name={name} mark={mark} isMoney isSpecial />
    </div>
  )
}

export default App
