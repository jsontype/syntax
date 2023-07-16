import "./App.css"
import { useState, useEffect } from "react"

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((item) => item.userId === 1)
        setTodos(result)
      })
  }, [])

  const onchange = (id) => {
    const result = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    setTodos(result)
  }

  const onDelete = (id) => {
    const result = todos.filter((item) => item.id !== id)
    setTodos(result)
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onCreate = (e) => {
    e.preventDefault()
    const newTodo = {
      id: todos.length + 1,
      title: text,
      completed: false,
      userId: 1,
    }
    setTodos([...todos, newTodo])
  }

  const render = todos.map((item) => {
    return (
      <div key={item.id}>
        <span>
          # {item.id} / {item.title} /
          <span onClick={() => onchange(item.id)}>
            {item.completed ? "✅" : "[TODO]"}
          </span>
          <span onClick={() => onDelete(item.id)}>🗑️</span>
        </span>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>TODO 앱</h1>
      <form onSubmit={onCreate}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="할일을 입력해주세요."
        />
        <input type="submit" value="Enter"></input>
      </form>
      <div>{render}</div>
    </div>
  )
}
