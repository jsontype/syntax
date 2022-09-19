import './App.css'
import Hello from './Hello'
import Wrapper from './Wrapper'

function App() {
  const name = 'Yang'

  return (
    <>
      <Wrapper>
        <Hello name={name} />
      </Wrapper>
    </>
  )
}

export default App
