// CSS
import { useState } from 'react'
import './App.css'

function App() {
  //JS
  const [obj, setObj] = useState({ id: 'yang', pw: '1234' })

  const onAdd = () => { setObj({ ...obj, email: 'test@example.com' }) } // 객체 추가
  const onMod = () => { setObj({ ...obj, email: '9999@example.com' }) } // 객체 수정
  const onDel = () => { const { email, ...delObj } = obj; setObj(delObj) } // 객체 삭제

  // HTML
  return (
    <>
      <div>ID : {obj.id}</div>
      <div>PW : {obj.pw}</div>
      <div>Email : {obj.email}</div>
      <button onClick={onAdd}>추가</button>
      <button onClick={onMod}>수정</button>
      <button onClick={onDel}>삭제</button>
    </>
  )
}

export default App
