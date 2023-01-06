import './App.css'
import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  // JS
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => { return res.json() })
      .then((json) => {
        const result = json.filter((item) => { return item.userId === 1 })
        setTodos(result)
      })
  }, [])

  const nextId = useRef(21) // todos.length + 1 왜 안 되지?

  // 추가
  const onCreate = (e) => {
    e.preventDefault() // form의 리다이렉팅을 방지
    setTodos([...todos, {
      completed: false,
      id: nextId.current,
      title: text,
      userId: 1,
    }])
    nextId.current++
  }

  const onChange = (e) => {
    setText(e.target.value)
  }    

  const render = todos.map((item) => {
    // 삭제
    const onDelete = (id) => {
      const result = todos.filter(item => { return item.id !== id })
      setTodos(result)
    }
    // 수정  
    const onChecked = (id) => {
      const result = todos.map(item => { return item.id === id ? { ...item, completed: !item.completed } : { ...item }})
      setTodos(result)
    }
    const titleClass = item.completed ? 'checked' : 'unchecked'
    return (
      <div className="todo" key={item.id}>
        <span>#{item.id} / </span>
        <span className={titleClass} onClick={() => onChecked(item.id)}>제목: {item.title} {item.completed && '👍'}</span>
        <span className="deleteBtn" onClick={() => onDelete(item.id)}>❌</span>
      </div>
    )
  })

  // XML
  return (
    <div className="App">
      <form onSubmit={onCreate}>
        <input name="title" type="text" onChange={onChange} value={text} required></input>
        <button type="submit">등록</button>
      </form>
      <div>{render}</div>
    </div>
  )
}
