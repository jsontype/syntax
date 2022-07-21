import React, { useState } from 'react';

function App() {
  // 변수 선언
  const [id, setId] = useState('') // let id = ''
  const [pw, setPw] = useState('') // let pw = ''

  // 변수 변경
  const onChangeId = (event) => {
    setId(event.target.value)
  }
  const onChangePw = (event) => {
    setPw(event.target.value)
  }

  // 이벤트 핸들링
  const onClick = () => {
    console.log('id: ', id)
    console.log('pw: ', pw)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input value={id} onChange={onChangeId} placeholder="ID를 입력해주세요."></input>
          <input value={pw} onChange={onChangePw} placeholder="PW를 입력해주세요."></input><br />
          <button onClick={onClick}>Go</button>
        </p>
        <h5>{id} / {pw}</h5>
        <h5>{id} / {pw}</h5>
      </header>
    </div>
  );
}

export default App;
