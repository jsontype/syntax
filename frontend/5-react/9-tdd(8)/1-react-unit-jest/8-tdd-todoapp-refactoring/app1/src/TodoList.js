import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList ({ todos, onToggle, onRemove }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}
