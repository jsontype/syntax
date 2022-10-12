import './App.css'
import Hello from './Hello'

export default function App() {
  // JS
  const name = 'Kim'

  // XML
  return (
    <>
      <Hello name={name} isSpecial isPremium />
    </>
  )
}
