import React, { memo, useCallback } from 'react'

function TodoItem ({ todo, onToggle, onRemove }) {
  const { id, text, done } = todo
  /**
   * TodoItem이 추가, 수정, 삭제될 때 애플리케이션에 보여지는 모든 TodoItem 컴포넌트들이 리렌더링이 되고 있다.
   * 따라서 memo와 useCallback을 사용하여 이를 방지하도록 하겠다.
   */
  const toggle = useCallback(() => onToggle(id), [id, onToggle])
  const remove = useCallback(() => onRemove(id), [id, onRemove])

  return (
    <li>
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none'
        }}
        onClick={toggle}
      >
        {text}
      </span>
      <button onClick={remove}>삭제</button>
    </li>
  )
}

// 쓰기, 수정, 삭제시의 리렌더링을 방지하기 위해서, TodoItem 컴포넌트를 React.memo로 감싸주어야 한다.
export default memo(TodoItem)
