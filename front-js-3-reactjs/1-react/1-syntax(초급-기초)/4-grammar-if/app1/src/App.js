import './App.css'
import Hello from './Hello'

export default function App() {  
  const name = 'Shin'
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
