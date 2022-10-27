import { FC } from 'react'
import './App.css'
import Greeting from './Greeting'

// export default function App() { // 이렇게 써도 되고 아래처럼 써도 된다. 아래의 경우, DefaultProps 사용 불가하게 됨
const App: FC = () => {
  const name = 'Yang'
  const lang = 'ko'

  const onClick = (name: string) => {
    console.log(`says hello to ${name}`)
  }  

  return (
    <div className="App">
      <Greeting name={name} lang={lang} onClick={onClick} />
      <Greeting lang='en' onClick={onClick} />
    </div>
  )
}

export default App
