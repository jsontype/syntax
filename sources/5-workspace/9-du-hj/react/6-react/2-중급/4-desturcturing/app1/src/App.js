import { useState } from 'react'

export default function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const [obj, setObj] = useState({ id: 'yang123', pw: '3qeklfew12' })

  // destructing : 비구조화 할당
  const { id, pw } = obj

  const addArr = () => { setArr([ ...arr, 6]) }
  const modArr = () => { setArr(arr.map((item, index) => { return index === arr.length - 1 ? 999 : item })) }
  const delArr = () => { setArr(arr.filter((item, index) => { return index !== arr.length - 1 }))}

  const addObj = () => { setObj({ ...obj, email: 'test@example.com' }) }
  const modObj = () => { setObj({ ...obj, email: 'zzzz@example.com' }) }
  const delObj = () => { const { email, ...delObj } = obj; setObj(delObj) }

  return (
    <div>
      <div>{arr[arr.length - 1]} </div>
      <button onClick={addArr}>배열 추가</button>
      <button onClick={modArr}>배열 수정</button>
      <button onClick={delArr}>배열 삭제</button>

      {/* destructing : 비구조화 할당 사용 */}
      <div>{id} {obj.email} {pw}</div>
      <button onClick={addObj}>객체 추가</button>
      <button onClick={modObj}>객체 수정</button>
      <button onClick={delObj}>객체 삭제</button>
      
      {/* {console.log(arr)} */}
      {/* {console.log(obj)} */}
    </div>
  )
}
