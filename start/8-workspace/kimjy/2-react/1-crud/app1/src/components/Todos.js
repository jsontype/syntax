import "./Todos.css"
import { useState, useRef, useEffect } from "react"

export default function Spreading() {
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
    // setArr(
    //   arr.map((item, index) => (index === arr.length - 1 ? item * 2 : item))
    // )
    //     setObj({ ...obj, age: obj.age + 1 })
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      })
    )
  }

  const render = todos.map((todo) => (
    <div key={todo.id}>
      <span className="todoItem">#{todo.id}</span>
      <span className={todo.completed ? "doneItem" : "todoItem"}>
        {todo.title}
      </span>
      <span className="btnItem">
        <button className="btn" onClick={() => onToggle(todo.id)}>
          {todo.completed ? "✅" : "❌"}
        </button>
      </span>
      <span className="btnItem">
        <button className="btn" onClick={() => onDelete(todo.id)}>
          🗑️
        </button>
      </span>
    </div>
  ))

  return (
    <div>
      <h1>Todos</h1>

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
