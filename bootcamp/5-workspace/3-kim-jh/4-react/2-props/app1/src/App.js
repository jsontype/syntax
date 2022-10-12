import './App.css'
import Hello from './Hello'
import Hello2 from './Hello2'
import Hello3 from './Hello3'

export default function App() {
  // JS
  const name = 'Yang'
  const name2 = 'Kim'

  // XML
  return (
    <> 
      {/* props : 프롭들을 넘겨준다. */}
      <Hello target={name} target2={name2} />
      <Hello2 target={name} target2={name2} />
      {/* children : 자식 태그들을 넘겨준다. */}
      <Hello3>
        <span>Hello</span>
        <span>World!</span>
      </Hello3>
    </>
  )
}

// export default App
