// CSS
import { useState } from 'react'
import './App.css'

function App() {
  //JS
  const [arr, setArr] = useState([1])

  const onAdd = () => { setArr([...arr, 1]) }
  const onDel = () => { setArr(arr.filter((item, index) => { return index !== arr.length - 1 })) } // 배열 삭제
  const onMod = () => { setArr(arr.map((item, index) => { return index === arr.length - 1 ? 9 : item })) } // 배열 수정

  // HTML
  return (
    <>
      <div>배열 : {arr}</div>
      <button onClick={onAdd}>추가</button>
      <button onClick={onDel}>삭제</button>
      <button onClick={onMod}>수정</button>
    </>
  )
}

export default App
