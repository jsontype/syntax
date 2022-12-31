import React, { useState } from 'react'

function App() {
  // useState : 초기값 선언후, state와 setState를 반환 = state를 만드는 방법
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')  

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(id, pw)
  }

  return (
    <div className="App">
      {id} {pw} <br />
      {id} {pw} <br />
      {id} {pw} <br />
      {id} {pw} <br />
      {id} {pw} <br />
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
  );
}

export default App;
