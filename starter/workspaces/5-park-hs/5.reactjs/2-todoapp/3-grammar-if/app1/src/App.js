import './App.css'
import Hello from './Hello'
import Wrapper from './Wrapper'

function App() {
  const name = 'Yang'

  return (
    <>
      <Wrapper>
        <Hello name={name} isPremium={true} />
        <Hello name={name} isPremium={true} />
        <Hello name={name} isSpecial={true} isPremium={true} />
        <Hello name={name} />
        <Hello name={name} />
      </Wrapper>
    </>
  )
}

export default App

// 문제 : isPremium 프롭을 주고, 얘가 투르이면 // 스페셜 "유료" 고객님 Yang... // false이면 스페셜 "무료" 고객님 Yang...
