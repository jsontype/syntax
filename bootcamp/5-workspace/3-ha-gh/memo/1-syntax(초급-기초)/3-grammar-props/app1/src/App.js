import './App.css'
import Hello from './Hello'

export default function App() {  
  const name = 'Shin'
  const mark = '!'

  return (
    <div className="hello">
      <Hello />
      <Hello />
      <Hello />
      {/* 1. 프롭 준다. */}
      <Hello name={name} mark={mark} />
    </div>
  )
}
