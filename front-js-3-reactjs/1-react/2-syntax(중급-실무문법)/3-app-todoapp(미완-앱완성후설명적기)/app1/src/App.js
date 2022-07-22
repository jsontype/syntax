import React, { useState, useEffect } from 'react'
import Input from './Input'
import TodoList from './TodoList'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => { return res.json() })
      .then((json) => {
        setTodos(json)
      })
  }, [])

  return (
    <>
      <div className="item">
        <Input />
      </div>
      <div className="item">
        <TodoList todos={todos} />
      </div>
    </>
  )
}
