import './App.css'
import Hello from './Hello'

export default function App() {  
  const name = 'Shin'
  const mark = '!'
  const sayHello = () => {
    alert('Hello!')
  }
  const sayText = (text) => {
    alert(text)
  }

  return (
    <div className="hello">
      {/* 1. 프롭 준다. */}
      <Hello name={name} mark={mark} sayHello={sayHello} sayText={sayText} />
    </div>
  )
}
