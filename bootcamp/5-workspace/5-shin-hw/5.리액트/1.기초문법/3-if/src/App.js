import Hello from './Hello'
import './App.css'

export default function App() {
  const name = 'Shin'

  return (
    <>
      <Hello />
      <Hello />
      <Hello name={name} isMoney isSpecial />
    </>
  )
}
