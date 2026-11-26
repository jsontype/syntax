import { useEffect } from "react"

const NoAlertBeforeUnloadTab = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      console.log('event: ', event)
      // 최신 브라우저(특히 크롬, 엣지, 사파리 등)에서는 보안 때문에 beforeunload 이벤트와 관련된 기능을 제한하고 있습니다.
      // 따라서, 이 코드는 최신 브라우저에서는 동작하지 않을 수 있습니다.
      alert("정말 이 페이지를 떠나시겠습니까?")
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return <h1>이 페이지를 닫으면 경고가 뜨지 않는다.</h1>
}

export default NoAlertBeforeUnloadTab
