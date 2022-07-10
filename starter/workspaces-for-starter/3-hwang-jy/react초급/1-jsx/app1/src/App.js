import './App.css'

function App() {
  // JS : JS 코드 넣는 부분
  console.log('hello')
  const name = 'Hwang'

  // JSX : HTML 코드 넣는 부분
  return (
    <div className="hello">
      <div>{console.log('hello')}</div>
      <div>{name}</div>
    </div>
  )
}

export default App
