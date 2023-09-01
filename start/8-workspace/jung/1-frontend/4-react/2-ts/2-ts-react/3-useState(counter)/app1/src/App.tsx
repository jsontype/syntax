import React from "react"
import Hello from "components/Hello"
import Counter from "components/Counter"
import Login from "components/Login"

export default function App() {
  const userName: string = "Josh Perez"

  const onClick = (target: string) => {
    alert(`hello! ${target}`)
  }

  const onLogin = (form: { id: string; pw: string }) => {
    console.log(form)
    // TODO: DB에 해당 form을 보내는 처리
    // ...
  }

  return (
    <div className="App">
      <Hello userName={userName} mark={"!"} onClick={onClick} />
      <Counter />
      <Login onLogin={onLogin} />
    </div>
  )
}
