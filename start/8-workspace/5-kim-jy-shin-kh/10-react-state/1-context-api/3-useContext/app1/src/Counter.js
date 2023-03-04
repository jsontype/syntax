import React from "react"
// 8. 리액트 useContext를 임포트
import { useContext } from "react"
// 9. 선언한 context를 임포트
import { CounterContext } from "./App"

// 10. state 프롭을 전달받는다. { state }
export default function Counter({ state }) {
  // 11. count 스테이트를 context로부터 가져오기 : 이렇게 쓰면 글로벌 스테이트가 된다.
  const count = state.counter.count
  // 12. action을 context로부터 가져오기 : 이때 useContext가 필요함!!!!
  const dispatch = useContext(CounterContext)

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" })
  }
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" })
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
