'use client'

import { useState } from 'react'

interface Todo {
  id: number
  title: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputText, setInputText] = useState("")
  const [todoKey, setTodoKey] = useState(0)

  // Add
  const addTodo = (inputText: string) => {
    const newTodo: Todo = {
      id: todoKey,
      title: inputText,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setTodoKey(todoKey + 1)
    setInputText("")
  }
  //Delete
  const delTodo = (id: number) => {
    const delItem = todos.filter((item) => item.id !== id)
    setTodos(delItem)
  }
  // Update
  const modTodo = (id: number) => {
    const modItem = todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    setTodos(modItem)
  }

  return (
    <div>
    <div className="mb-[20px]">
      <span className="mr-[5px]">
        <input className="bg-gray-500 border border-gray-300 p-[5px] mr-[5px]" type="text"
          value={inputText}
          required
          placeholder="Add Todo"
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </span>
      <button onClick={() => addTodo(inputText)}>ADD</button>
    </div>

    <ul>
      {todos.map((todo) => (
        <li  key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <button className="bg-blue-300 mr-[5px] border p-[5px]" onClick={() => modTodo(todo.id)}>Done</button>
          <button className="bg-red-300 border  p-[5px]" onClick={() => delTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>

  )
}
