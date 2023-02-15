import React from 'react'

export default function TodoItem ({ todo, onToggle, onRemove }) {
  const { id, text, done } = todo

  return (
    <li>
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none'
        }}
        onClick={() => onToggle(id)}
      >
        {text}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  )
}
