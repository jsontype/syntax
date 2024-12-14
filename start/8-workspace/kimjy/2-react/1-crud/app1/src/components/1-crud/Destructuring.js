import { useState } from "react"

export default function Destructuring() {
  const [obj, setObj] = useState({ name: "John", age: 25, email: "" })

  // 비구조화 할당
  // const { name, age, email } = obj
  const { name: myName, age: myAge, email: myEmail } = obj

  const addObj = () => {
    setObj({ ...obj, email: "test@test.com" })
  }
  const delObj = () => {
    setObj({ ...obj, email: "" })
  }
  const modObj = () => {
    setObj({ ...obj, age: obj.age + 1 })
  }

  return (
    <div>
      <h1>Destructuring</h1>
      <div>Hello React!</div>
      <h3>
        {/* obj: {name}, {age}, {email ? email : "no email"} */}
        obj: {myName}, {myAge}, {myEmail ? myEmail : "no email"}
      </h3>
      <button onClick={() => addObj()}>추가</button>
      <button onClick={() => delObj()}>삭제</button>
      <button onClick={() => modObj()}>수정</button>
    </div>
  )
}
