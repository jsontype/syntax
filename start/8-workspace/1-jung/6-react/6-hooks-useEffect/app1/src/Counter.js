import React, { useEffect } from "react"

export default function Counter({ number, onIncrease, onDecrease }) {
  // JS
  // 첫번째 인자 : 실행할 함수
  // 두번째 인자 : Deps 배열 (watch 하고 있는 개체)
  useEffect(() => {
    console.log("mounted")
  }, []) // 탄생: Counter 앱이 열렸을 때

  useEffect(() => {
    console.log("updated")
  }, [number]) // 성장: number 값이 바뀌었을 때

  useEffect(() => {
    return () => console.log("unmounted")
  }, []) // 죽음: Counter 앱이 닫혔을 때

  // XML
  return (
    <div className="App">
      <h1>카운터 앱</h1>
      <h2>{number}</h2>

      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
