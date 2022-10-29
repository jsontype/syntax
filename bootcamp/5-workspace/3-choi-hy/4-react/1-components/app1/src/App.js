import './App.css'
import Greeting from './components/Greeting'
import Greeting2 from './components/Greeting2'
import Greeting3 from './components/Greeting3'

export default function App () {
  // JS
  const name = 'Yang'
  const language = 'ko'

  // XML
  return (    
    <div className="App">
      Hello React!
      {/* props별로 사용 */}
      <Greeting name={name} language={language} />
      <Greeting language={language} />
      <Greeting />
      {/* props 그대로 사용 */}
      <Greeting2 name={name} language={language} />
      <Greeting2 language={language} />
      <Greeting2 />
      {/* children : 내부 xml을 props로 던지기 */}
      <Greeting3>
        <span>{name} </span>
        <span>Hi!</span>
      </Greeting3>
    </div>
  )
}
