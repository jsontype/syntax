import { useState, useEffect, useRef } from "react"

const AsyncLoopResumeBeforeUnloadTab = () => {
  const [users, setUsers] = useState([]) // 사용자 데이터 상태
  const [isFetching, setIsFetching] = useState(true) // 데이터 가져오기 활성화 상태
  const intervalRef = useRef(null) // setInterval 저장용 ref

  // 🔹 사용자 목록을 가져오는 함수
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUsers(data) // 데이터 갱신
      console.log("✅ 새로운 데이터 가져옴:", data)
    } catch (error) {
      console.error("❌ 데이터 가져오기 실패:", error)
    }
  }

  useEffect(() => {
    // 🔹 갱신 시작 함수
    const startFetching = () => {
      if (!intervalRef.current) {
        fetchUsers() // 첫 번째 실행
        intervalRef.current = setInterval(fetchUsers, 3000) // 3초마다 실행
        console.log("🔄 데이터 갱신 시작됨")
      }
    }

    // 🔹 갱신 중지 함수
    const stopFetching = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        console.log("⏸ 데이터 갱신 중단됨")
      }
    }

    // 🔹 최초 실행 시 갱신 시작
    if (isFetching) {
      startFetching()
    }

    // 🔹 페이지를 떠날 때 (`beforeunload`)
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      console.log("🚨 URL를 떠나지 않았음 - 데이터 갱신 중단하지 않음")
      startFetching()
    }

    const handleUnload = (event) => {
      event.preventDefault()
      console.log("🚨 URL을 떠남 - 데이터 갱신 중단")
      stopFetching()
    }

    const handleVisibilityChange = (event) => {
      event.preventDefault()
      console.log("🚨 URL은 떠나지 않았으나, 컴포넌트를 끔 - 데이터 갱신 중단")
      // 다른 메뉴로 가서 컴포넌트를 꺼도 데이터 갱신을 중단하고 싶지 않다면, 아래 부분을 주석처리하면 된다.
      stopFetching()
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    window.addEventListener("unload", handleUnload)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      // 🔹 cleanup: 이벤트 리스너 해제 & 인터벌 정리
      window.removeEventListener("beforeunload", handleBeforeUnload)
      window.removeEventListener("unload", handleUnload)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      stopFetching()
    }
  }, [isFetching])

  return (
    <div>
      <h1>사용자 목록 (10초마다 갱신됨)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AsyncLoopResumeBeforeUnloadTab
