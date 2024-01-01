import "./App.css"
import { useState } from "react"

export default function App() {
  const [a, setA] = useState({ id: "asdf", pw: 1234 })

  function addA() {
    setA({ ...a, email: "test@test.com" }) // 추가
  }

  function editA() {
    setA({ ...a, pw: 9999 }) // 수정
  }

  function deleteA() {
    const { pw, ...result } = a // a에서 pw를 삭제한 새 객체를 result에 저장
    setA(result) // 삭제
  }

  const [b, setB] = useState([1, 2, 3])

  function addB() {
    setB([...b, 4]) // 추가 : b.push(4) X
  }

  function editB() {
    setB(
      b.map((item, index) => {
        return index === b.length - 1 ? 9999 : item
      })
    ) // 수정 : 마지막 인덱스의 값을 9999로 변경
  }

  function deleteB() {
    setB(
      b.filter((item, index) => {
        return index !== b.length - 1
      })
    ) // 삭제 : 마지막 인덱스 삭제
  }

  return (
    <div className="App">
      <h1>객체 CRUD</h1>
      <div>ID: {a.id}</div>
      <div>PW: {a.pw}</div>
      <div>Email: {a.email}</div>

      <h1>배열 CRUD</h1>
      <div>{b.join(", ")}</div>

      <p>
        <button onClick={addA}>객체 추가</button>
        <button onClick={editA}>객체 수정</button>
        <button onClick={deleteA}>객체 삭제</button>
        <button onClick={addB}>배열 추가</button>
        <button onClick={editB}>배열 수정</button>
        <button onClick={deleteB}>배열 삭제</button>
      </p>
    </div>
  )
}
