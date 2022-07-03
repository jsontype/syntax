import React from 'react'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('변경된 또다른 버튼')
  const change = () => {
    setText('버튼 눌러 변경된 또다른 버튼')
  }

  return (
    <div className='App'>
      <h1>Props</h1>
      <Counter click='변경된 버튼'/>
      <Counter click={text} />
      <button onClick={change}>← 두번째 버튼 변경</button>
    </div>
  );
}

export default App
