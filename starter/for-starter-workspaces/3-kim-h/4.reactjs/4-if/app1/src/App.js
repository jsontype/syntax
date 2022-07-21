// CSS
import './App.css'
import Hello from './Hello'

function App() {
  //JS
  const isOutText = '탈퇴'

  // HTML
  return (

    <>
      <Hello />
      <Hello isOut={isOutText} />
      <Hello isPremium />
      <Hello isSpecial isPremium />
    </>
  )
}

export default App
