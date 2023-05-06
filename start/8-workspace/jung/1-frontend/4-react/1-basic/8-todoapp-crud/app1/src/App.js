import React, { useState, useEffect, useRef } from "react"
import Checkbox from "@mui/material/Checkbox"
import DeleteIcon from "@mui/icons-material/Delete"
import Button from "@mui/material/Button"
import "./App.css"

function App() {
  // JS
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const nextId = useRef(1)

  // 인풋창 validation
  const onChange = (e) => {
    const { value } = e.target
    if (value.length > 100) {
      alert("100자 이하로 입력해주세요.")
      return
    }
    setText(value)
  }

  // 배열 추가
  const onCreate = (e) => {
    // form의 원래의 submit의 기능을 끔
    e.preventDefault()

    // 인풋창에 아무것도 안 썼을 때의 처리
    if (text.length <= 0) {
      alert("할일을 입력해주세요.")
      return
    }

    // 할일이 추가된 투두 리스트 작성
    const result = [
      ...todos,
      {
        id: nextId.current,
        title: text,
        completed: false,
        userId: 1,
      },
    ]
    nextId.current++
    setTodos(result)

    // 인풋창 비우기
    setText("")
  }

  // 배열 수정
  const onComplete = (id) => {
    const result = todos.map((item) => {
      return id === item.id
        ? { ...item, completed: !item.completed }
        : { ...item }
    })
    setTodos(result)
  }

  // 배열 삭제
  const onDelete = (id) => {
    const result = todos.filter((item) => {
      return id !== item.id
    })
    setTodos(result)
  }

  // 할일목록 렌더링
  const render = todos.map((item) => {
    return (
      <div key={item.id}>
        <span>#{item.id}. </span>
        <span>{item.title}</span>
        <span onClick={() => onComplete(item.id)}>
          <Checkbox checked={item.completed} />
        </span>
        <span className="deleteIcon">
          <DeleteIcon onClick={() => onDelete(item.id)}>삭제</DeleteIcon>
        </span>
      </div>
    )
  })

  // XML
  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
        <form onSubmit={onCreate}>
          <input
            className="inputText"
            name="todo"
            type="text"
            value={text}
            onChange={onChange}
            placeholder="추가할 일 적어주세요."
          ></input>
          <Button type="submit" variant="contained">
            추가
          </Button>
        </form>
        <div>{render}</div>
      </div>
    </>
  )
}

export default App
