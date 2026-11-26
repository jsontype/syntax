import { useState, useEffect } from "react"

const AlertBeforeUnloadTab = () => {
  const [text, setText] = useState("이 페이지를 닫으면 text 스테이터스가 변경된다.")

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // handleBeforeUnload 함수에 event.preventDefault()가 있으면, 페이지를 닫을 때 경고창이 뜹니다.
      event.preventDefault()

      // event 안의 내용물을 변경하는 것은 가능하다.
      console.log('event: ', event)

      // 예를 들어 확인창에서 취소했을 때, 아래처럼 안의 소스를 변경하는 건 가능하다.
      // event.srcElement.querySelector('h1').innerHTML = "333"
      // console.log('event.srcElement: ', event.srcElement.querySelector('h1').innerHTML)

      // states를 변경하는 것도 가능하다?
      setText("이 페이지를 닫으면 text 스테이터스가 변경된다. (변경된 문구)")
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return <h1>{ text }</h1>
}

export default AlertBeforeUnloadTab
