import './App.css'
import Hello from './Hello'
import Hello2 from './Hello2'
import Hello3 from './Hello3'

export default function App () {
  // JS  
  const react = 'React'
  const css = 'Css'
  const html = 'HTML'
  const js = 'Javascript'

  // XML
  return (
    <div className="App">
      <h2>컴포넌트에 프롭을 넘겨줄 때 props</h2>
      <Hello />
      <Hello name={react} />
      <Hello name={css} />
      <Hello name={html} />
      <Hello name={js} />
      <hr />
      <h2>컴포넌트에 프롭을 넘겨줄 때 중괄호안에 프롭명</h2>
      <Hello2 />
      <Hello2 name={react} />
      <Hello2 name={css} />
      <Hello2 name={html} />
      <Hello2 name={js} />
      <hr />
      <h2>컴포넌트에 자식 태그를 넘겨줄 때 children</h2>
      <Hello3>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </Hello3>
    </div>
  )
}
