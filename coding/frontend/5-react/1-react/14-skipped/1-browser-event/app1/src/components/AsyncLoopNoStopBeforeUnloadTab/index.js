import { useState, useEffect, useRef } from "react"

const AsyncLoopResumeBeforeUnloadTab = () => {
  const [users, setUsers] = useState([]) // 사용자 데이터 상태
  const intervalRef = useRef(null) // setInterval 저장용 ref

  // 🔹 사용자 목록을 가져오는 함수 (중단 없이 계속 실행됨)
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
    // 🔹 최초 실행
    fetchUsers()
    // !!! AsyncLoopResumeBeforeUnloadTab 과의 변경점: startFetching을 사용하지 않음 !!!
    intervalRef.current = setInterval(fetchUsers, 3000) // 3초마다 실행

    // 🔹 beforeunload 이벤트 핸들러
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      console.log("🚨 페이지를 떠나겠습니까? -> 취소하면 fetch 유지")
      // !!! AsyncLoopResumeBeforeUnloadTab 과의 변경점: startFetching을 사용하지 않음 !!!
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      // 🔹 cleanup: beforeunload 이벤트 해제 (fetch는 중단하지 않음)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return (
    <div>
      <h1>사용자 목록 (3초마다 갱신됨)</h1>
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
