import { useState } from "react"

// export default App을 지우고 아래처럼 써도 된다.
export default function App() {
  // JS
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const [obj, setObj] = useState({ id: "yang123", pw: "3qeklfew12" })

  const addArr = () => {
    setArr([...arr, 6])
  } // 배열 추가인데, = setArr(arr.concat(6)) 이렇게 해도 된다. 이거는 concat이 push 대신이다. 그렇다고 arr.push(6) 이런식으로 하면 안된다. 왜? push는 불변성을 깨니까.
  const modArr = () => {
    setArr(
      arr.map((item, index) => {
        return index === arr.length - 1 ? 999 : item
      })
    )
  } // 배열 수정
  const delArr = () => {
    setArr(
      arr.filter((item, index) => {
        return index !== arr.length - 1
      })
    )
  } // 배열 삭제

  const addObj = () => {
    setObj({ ...obj, email: "test@example.com" })
  } // 객체 추가
  const modObj = () => {
    setObj({ ...obj, email: "zzzz@example.com" })
  } // 객체 수정
  const delObj = () => {
    const { email, ...delObj } = obj
    setObj(delObj)
  } // 객체 삭제

  // HTML
  return (
    <div>
      <div>{arr.join(", ")}</div>
      <button onClick={addArr}>배열 추가</button>
      <button onClick={modArr}>배열 수정</button>
      <button onClick={delArr}>배열 삭제</button>

      <div>
        {obj.id} {obj.email}
      </div>
      <button onClick={addObj}>객체 추가</button>
      <button onClick={modObj}>객체 수정</button>
      <button onClick={delObj}>객체 삭제</button>

      {/* {console.log(arr)} */}
      {/* {console.log(obj)} */}
    </div>
  )
}
