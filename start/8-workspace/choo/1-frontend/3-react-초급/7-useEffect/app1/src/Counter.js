import "./App.css"
import { useEffect } from "react"

export default function Counter({ count, setCount }) {
  // JS
  useEffect(() => {
    console.log("mount 됐음")
  }, []) // mounting 시점 : deps에 빈 배열을 넣었을 때

  useEffect(() => {
    console.log("count가 update 됐음: ", count)
  }, [count]) // updating 시점 : deps에 업데이트 되는 변수를 넣었을 때

  useEffect(() => {
    return () => console.log("unmount 됐음")
  }, []) // unmounting 시점 : deps에 빈 배열을 넣고, 코드를 return () => {} 형태로 실행했을 때

  // XML
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}
