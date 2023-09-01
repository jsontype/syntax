import React from "react"
// 8. useContext를 임포트
import { useContext } from "react"
// 9. Store를 임포트
import { CounterContext } from "./App"

// 10. context 글로벌스테이트를 사용하기 위해, state를 프롭으로 넘겨받기
export default function Counter({ state }) {
  // 11. state에서 count를 추출
  const { count } = state.counter
  // 12. useContext를 이용해서, dispatch 함수를 생성
  const dispatch = useContext(CounterContext)
  const onIncrease = () => {
    dispatch({ type: "INCREASE" })
  }
  const onDecrease = () => {
    dispatch({ type: "DECREASE" })
  }

  return (
    <div>
      {/* 13. 글로벌스테이트 count를 렌더링 */}
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
