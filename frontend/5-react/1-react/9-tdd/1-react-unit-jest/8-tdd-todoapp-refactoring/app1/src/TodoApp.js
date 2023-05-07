import React, { useState, useCallback, useRef } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function TodoApp () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true
    },
    {
      id: 2,
      text: '@testing-library/react 사용하기',
      done: true
    }
  ])

  const nextId = useRef(3)

  const onInsert = useCallback(text => {
    // 함수형 업데이트 : "todos =>" 문구가 필수이다.
    setTodos(todos =>
      todos.concat({
        id: nextId.current,
        text,
        done: false
      })
    )
    nextId.current += 1
  }, [])

  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    )
  }, [])

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  )
}
