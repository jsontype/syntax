import { useState } from "react"

export default function Spreading() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const [obj, setObj] = useState({ name: "John", age: 25 })

  const addArr = () => {
    setArr([...arr, arr.length + 1])
  }
  const delArr = () => {
    setArr(arr.filter((_item, index) => index !== arr.length - 1))
  }
  const modArr = () => {
    setArr(
      arr.map((item, index) => (index === arr.length - 1 ? item * 2 : item))
    )
  }

  const addObj = () => {
    setObj({ ...obj, email: "test@test.com" })
  }
  const delObj = () => {
    const { email, ...delObj } = obj
    setObj(delObj)
  }
  const modObj = () => {
    setObj({ ...obj, age: obj.age + 1 })
  }

  return (
    <div>
      <h1>Spreading</h1>
      <div>Hello React!</div>
      <h3>arr: {arr.join(", ")}</h3>
      <button onClick={() => addArr()}>추가</button>
      <button onClick={() => delArr()}>삭제</button>
      <button onClick={() => modArr()}>수정</button>
      <h3>
        obj: {obj.name}, {obj.age}, {obj.email ? obj.email : "no email"}
      </h3>
      <button onClick={() => addObj()}>추가</button>
      <button onClick={() => delObj()}>삭제</button>
      <button onClick={() => modObj()}>수정</button>
    </div>
  )
}
