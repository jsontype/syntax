// 6. Presentational 컴포넌트 만들기
import React from "react"
// 글로벌스테이트 사용 1
import { useSelector } from "react-redux"

export default function Counter({ count, onIncrease, onDecrease }) {
  // 글로벌스테이트 사용 2
  const todos = useSelector((state) => state.todos)

  return (
    <div>
      {/* 글로벌스테이트 사용 3 */}
      <p>
        가장 최근에 쓴 할일 :{" "}
        {todos.length > 0 ? todos[todos.length - 1].title : "할 일이 없습니다."}
      </p>

      <h2>{count}</h2>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}
