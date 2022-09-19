import React, { useState } from 'react'
import './App.css'

function App() {
  // State 변수 설정 방법
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  // 함수 지정
  const onSubmit = (event) => { 
    event.preventDefault() // 원래 form대로의 행동이 아닐 경우
    console.log('Submit됨')
    console.log('ID: ', id)
    console.log('PW: ', pw)
  }

  return (
    <div className="App">
      <p>id: {id}</p>
      <p>id: {id}</p>
      <p>pw: {pw}</p>
      <p>pw: {pw}</p>

      <form onSubmit={onSubmit}>
        <input
            type='text'
            placeholder='ID를 입력해주세요'
            value={id}
            onChange={(event) => setId(event.target.value)}
        /><br />
        <input
            type='password'
            placeholder='PW를 입력해주세요'
            value={pw}
            onChange={(event) => setPw(event.target.value)}
        /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App