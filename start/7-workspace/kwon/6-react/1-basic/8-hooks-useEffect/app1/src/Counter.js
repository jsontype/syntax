import React, { useEffect } from "react"

export default function Counter({ number, setNumber }) {
  // mounting 시점 : Deps가 빈 배열인 경우
  // unmounting 시점 : Deps가 빈 배열이고, 처리를 return 안에 함수형으로 처리를 넣어준 경우
  useEffect(() => {
    console.log("mounting 시점의 처리")
    return () => {
      console.log("unmounting 시점의 처리")
    }
  }, [])

  // updating 시점 : Deps에 watch 대상 변수가 들어간 경우
  useEffect(() => {
    console.log("updating 시점의 처리 (number 값의 업데이트):", number)
  }, [number])

  return (
    <div>
      <h1>카운터 앱</h1>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  )
}
