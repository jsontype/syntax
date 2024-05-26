import { useState } from "react"

export default function useTodos() {
  const [todos, setTodos] = useState([])
  const [todoKey, setTodoKey] = useState(todos.length + 1)

  // Insert
  const addTodo = (text) => {
    const newTodo = { id: todoKey, title: text, completed: false }
    setTodoKey(todoKey + 1)
    setTodos([...todos, newTodo])
  }

  // Delete
  const delTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  // Update
  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(newTodos)
  }

  return { todos, addTodo, delTodo, toggleTodo }
}
