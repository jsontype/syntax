import React, { useState, useRef } from 'react'
import './Todos.css'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')
  const key = useRef(todos.length + 1)

  const addTodo = (text) => { setTodos([ ...todos, { id: key.current++, content: text, isDone: false }]) }
  const toggleTodo = (id) => setTodos(todos.map((item) => { return item.id === id ? { ...item, isDone: !item.isDone } : { ...item } }))
  const deleteTodo = (id) => { setTodos(todos.filter((item) => { return item.id !== id })) }

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(inputText)
    setInputText('')
  }

  const onChange = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }
  
  const render = todos.map((todo) => {
    return (
      <div className="todo" key={todo.id}>
        <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo.id)} />
        <span className={`${todo.isDone}Done`}>{todo.content}</span>
        <span onClick={() => deleteTodo(todo.id)}> 🗑️</span>
      </div>
    )
  })

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={onSubmit}>
        <input value={inputText} onChange={onChange} placeholder='할일을 입력하세요' />
        <button type='submit'>추가</button>
      </form>
      <div>{render}</div>
    </>    
  )
}
