import React from 'react'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('리뉴얼된 Click 1')
  // let text = '리뉴얼된 Click 1'

  const change = () => {
    setText('리뉴얼된 Click 2')
  }
  // const change = () => {
  //   text = '리뉴얼된 Click 2'
  //   console.log(text)
  // }

  return (
    <div className='App'>
      <h1>Components</h1>
      <Counter click="변경된 Click" />
      <Counter click={text} />
      <Counter />
      <button onClick={change}>세번째 버튼 변경</button>
    </div>
  )
}

export default App;
