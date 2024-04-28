import React, { useState } from "react"
import "./style.css"

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
    const isDone = item.completed ? "done" : ""
    return (
      <div
        key={item.id}
        className={isDone}
        onClick={() => onCompleted(item.id)}
      >
        <span># {item.id} / </span>
        <span>
          {item.title}
          &nbsp;
        </span>
        <button onClick={() => onDelete(item.id)}>삭제</button>
      </div>
    )
  })

  return (
    <div>
      <h1>투두앱</h1>
      <form onSubmit={onSubmit}>
        <input
          name="todo"
          type="text"
          value={input}
          onChange={onChange}
        ></input>
        <button type="submit">전송</button>
      </form>

      <div>{render}</div>
    </div>
  )
}
