import { useState } from 'react'
import './App.css'

export default function App() {
  // 배열 선언
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  // 배열 추가
  const addArr = () => {setArr([ ...arr, 6 ])}
  // 배열 변경
  const modArr = () => {setArr(arr.map((item, index) => { return index === arr.length - 1 ? 9 : item }))}
  // 배열 삭제
  const delArr = () => {setArr(arr.filter((item, index) => { return index !== arr.length - 1 } ))}

  // 객체 선언
  const [obj, setObj] = useState({ id: 'yang', pw: 1234 })
  // 객체 추가
  const addObj = () => {setObj({ ...obj, email: 'test@test.com' })}
  // 객체 변경
  const modObj = () => {setObj({ ...obj, id: 'park' })}
  // 객체 삭제
  const delObj = () => {
    const { pw, ...newObj } = obj
    setObj(newObj)
  }
  
  // 조회
  return (
    <>
      <h2>테스트</h2>
      <div>arr[arr.length-1]: {arr[arr.length-1]}</div>
      <div>obj.pw: {obj.id}</div>
      <div>obj.pw: {obj.pw}</div>
      <div>obj.email: {obj.email}</div>
      <div>
        <button onClick={addArr}>배열추가</button>
        <button onClick={modArr}>배열변경</button>
        <button onClick={delArr}>배열삭제</button>
      </div>
      <div>
        <button onClick={addObj}>객체추가</button>
        <button onClick={modObj}>객체변경</button>
        <button onClick={delObj}>객체삭제</button>
      </div>
      {/* {console.log('arr: ', arr)} */}
      {/* {console.log('obj: ', obj)} */}
    </>
  )
}
