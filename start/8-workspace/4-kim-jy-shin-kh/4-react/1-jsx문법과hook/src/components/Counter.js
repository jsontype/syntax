import { useState, useEffect } from "react"

export default function Counter() {
  const [count, setCount] = useState(1)

  // life cycle 함수 : initial mounting => (updating => mounting 무한반복) => unmounting
  useEffect(() => {
    console.log("initial mounting")
  }, []) // deps가 []이면, 앱이 열린 시점에 실행 = initial mounting 시점

  useEffect(() => {
    console.log("updating")
  }, [count]) // deps가 [movies]이면, movies가 업데이트 된 시점에서 실행 = updating * mouting 시점

  useEffect(() => {
    return () => {
      console.log("unmounting")
    }
  }, []) // deps가 []이고 실행코드가 return () => {} 안에 있으면, 앱이 닫히는 시점에 실행 = unmounting 시점

  return (
    <div>
      <div>Counter : {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}
