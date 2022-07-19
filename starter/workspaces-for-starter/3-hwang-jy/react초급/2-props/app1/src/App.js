import './App.css'
// 2. 컴포넌트 임포트한다.
import Hello from './Hello'

function App() {  
  const name = 'Shin'
  const mark = '!'

  return (
    <div className="hello">
      {/* 3. 컴포넌트 쓴다. */}
      <Hello />
      <Hello />
      <Hello />
      {/* 4. 프롭 준다. */}
      <Hello name={name} mark={mark} />
    </div>
  )
}

export default App
