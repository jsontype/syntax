import { useState, useEffect } from "react"

const AlertBeforeUnloadTab = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // handleBeforeUnload 함수에 event.preventDefault()가 있으면, 페이지를 닫을 때 경고창이 뜹니다.
      event.preventDefault()
      event.currentTarget.alert = "111?"
      console.log('event: ', event)
      event.srcElement.alert = "222?"
      // 취소를 안했을 때... 안의 소스를 변경하는 건 가능하다.
      event.srcElement.querySelector('h1').innerHTML = "333?"
      console.log('event.srcElement: ', event.srcElement.querySelector('h1').innerHTML)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return <h1>{ text } 이 페이지를 닫으면 경고가 뜬다. 11</h1>
}

export default AlertBeforeUnloadTab
