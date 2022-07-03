import './App.css'
import Hello from './Hello'

function App() {
  // JS 넣는 곳
  const name = 'Yang'
  const style = {
    backgroundColor: '#000',
    color: 'red'
  }

  // JSX 넣는 곳
  return (
    <>
      <div style={style}>{name}</div>
      <div className="gray-box">{name}</div>
      {console.log('hello')}
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </>
  )
}

export default App
