import "./App.css"
import { useState, useEffect } from "react"

export default function App() {
  // JS
  const [arr, setArr] = useState([1, 2])
  const [obj, setObj] = useState({ id: 'yang123', pw: '3qeklfew12', email: ''  })

  // destructuring 문법
  const { id, pw, email } = obj

  useEffect(() => {
    console.log('arr 바뀜')
  }, [arr]) // update 시점에서 반드시 실행해야하는 어떤 처리

  // 불변성의 법칙을 지키면서 CRUD중 CUD를 하는 방법
  const addArr = () => { setArr([...arr, 3]) } // 배열 추가
  const modArr = () => { setArr(arr.map((item, index) => { return index === arr.length - 1 ? 999 : item })) } // 배열 수정
  const delArr = () => { setArr(arr.filter((item, index) => { return index !== arr.length - 1 }))} // 배열 삭제

  const addObj = () => { setObj({ ...obj, email: 'test@example.com' }) } // 객체 키 추가
  const modObj = () => { setObj({ ...obj, email: 'zzzz@example.com' }) } // 객체 키밸류 수정
  const delObj = () => { const { email, ...delObj } = obj; setObj(delObj)} // 객체 키 삭제

  // XML
  return (
    <div className="App">
      <button onClick={addArr}>배열추가</button>
      <button onClick={modArr}>배열수정</button>
      <button onClick={delArr}>배열삭제</button>

      <button onClick={addObj}>객체추가</button>
      <button onClick={modObj}>객체수정</button>
      <button onClick={delObj}>객체삭제</button>

      <div>배열값 : {arr.join(', ')}</div>
      <div>객체값</div>
      <div>id: {id}</div>
      <div>pw: {pw}</div>
      <div>email: {email}</div>
    </div>
  )
}
