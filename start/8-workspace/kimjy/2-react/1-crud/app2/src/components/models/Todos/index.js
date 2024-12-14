import styles from "./style.module.scss"
import { useState, useRef, useEffect } from "react"

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState("")

  const nextId = useRef(21)

  // mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((item) => item.userId === 1)
        setTodos(result)
      })
  }, [])

  const onCreate = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      { userId: 1, id: nextId.current++, title: inputText, completed: false },
    ])
  }

  const onDelete = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id
      })
    )
  }

  const onToggle = (id) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      })
    )
  }

  const render = todos.map((todo) => (
    <div key={todo.id}>
      <span className={styles.todoItem}>#{todo.id}</span>
      <span className={todo.completed ? "doneItem" : "todoItem"}>
        {todo.title}
      </span>
      <span className={styles.btnItem}>
        <button className={styles.btn} onClick={() => onToggle(todo.id)}>
          {todo.completed ? "✅" : "❌"}
        </button>
      </span>
      <span className={styles.btnItem}>
        <button className={styles.btn} onClick={() => onDelete(todo.id)}>
          🗑️
        </button>
      </span>
    </div>
  ))

  return (
    <div>
      <form onSubmit={onCreate}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>

      <div>input: {inputText}</div>

      <div>{render}</div>
    </div>
  )
}
