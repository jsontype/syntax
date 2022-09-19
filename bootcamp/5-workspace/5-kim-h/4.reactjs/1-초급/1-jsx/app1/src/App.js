// CSS
import './App.css'

function App() {
  //JS
  const name = 'Kim'
  const printTxt = (text) => {console.log(text)}

  // HTML
  return (
    <>
      <div className='red'>Hello {name}!</div>
      <div>Hello {name}!</div>
      <div>Hello {name}!</div>

      {printTxt(name)}
    </>
  )
}

export default App
