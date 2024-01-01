import React, { useState } from "react"
// 글로벌스테이트 사용 1
import { useSelector } from "react-redux"

export default function Todos({ todos, onCreate, onCompleted, onDelete }) {
  const [input, setInput] = useState("")

  const onChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onCreate(input)
    setInput("")
  }

  const render = todos.map((item) => {
    const isDone = item.completed ? "완료" : "미완료"
    return (
      <div key={item.id}>
        <span>번호: {item.id} / </span>
        <span onClick={() => onCompleted(item.id)}>{item.title} / </span>
        <span>상태: {isDone}</span>
        <button onClick={() => onDelete(item.id)}>삭제</button>
      </div>
    )
  })

  // 글로벌스테이트 사용 2
  const count = useSelector((state) => state.counter.count)

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input name="todo" type="text" value={input} onChange={onChange} />
        <button type="submit">추가</button>
      </form>

      <div>{render}</div>

      {/* 글로벌스테이트 사용 3 */}
      <h2>Todos 안에서의 Count: {count}</h2>
    </>
  )
}
