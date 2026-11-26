import React, { useState, useEffect } from "react"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import TextField from "@mui/material/TextField"
import Label from "../../components/Atoms/Label"
import NormalButton from "../../components/Atoms/NormalButton"
// Jotai: store, useAtom, 데이터 fetch 함수를 import
import { store } from "../../stores"
import { useAtom } from "jotai"
// Connector 함수를 import
import { fetchTodos } from "../../connectors"

export default function Todos() {
  // Jotai: useState를 useAtom으로 수정
  const [todos, setTodos] = useAtom(store.todosAtom.todos)
  const [todoKey, setTodoKey] = useAtom(store.todosAtom.todosKey)
  const [inputText, setInputText] = useState("")

  // Mounted: fetch를 받아오도록 수정
  useEffect(() => {
    fetchTodos().then((todos) => {
      setTodos(todos)
      setTodoKey(todos.length + 1)
    })
  }, [setTodoKey, setTodos])

  const render = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <div>
          <span
            className={
              todo.completed ? "text-gray-500 line-through" : "font-bold"
            }
            onClick={() => modTodo(todo.id)}
          >
            #{todo.id} / {todo.title}
          </span>
          <Checkbox
            checked={todo.completed}
            onChange={() => modTodo(todo.id)}
          />
          <IconButton aria-label="delete" onClick={() => delTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    )
  })

  // Insert
  const addTodo = (inputText) => {
    const addItem = [
      ...todos,
      { id: todoKey, title: inputText, completed: false },
    ]
    setTodoKey(todoKey + 1)
    setTodos(addItem)
    setInputText("")
  }

  // Delete
  const delTodo = (id) => {
    const delItem = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(delItem)
  }

  // Update
  const modTodo = (id) => {
    const modItem = todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    setTodos(modItem)
  }

  return (
    <div>
      <Label text="Todos" />

      <div className="mb-[20px]">
        <span className="mr-[5px]">
          <TextField
            value={inputText}
            size="small"
            required
            placeholder="New Todo"
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </span>
        <NormalButton buttonText="SEND" onClick={() => addTodo(inputText)} />
      </div>
      <div>{render}</div>
    </div>
  )
}
