import { useState, useEffect, useRef } from "react"

const AsyncLoopStopBeforeUnloadTab = () => {
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
    // 🔹 10초마다 `fetchUsers` 실행 (isFetching이 true일 때만)
    if (isFetching) {
      fetchUsers() // 첫 번째 실행
      intervalRef.current = setInterval(fetchUsers, 3000) // 3초마다 실행
    }

    // 🔹 beforeunload 발생 시 타이머 제거
    const handleBeforeUnload = (e) => {
      e.preventDefault()
      console.log("🚨 페이지를 떠남 - 데이터 갱신 중단")
      setIsFetching(false) // fetch 중지
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      // 🔹 cleanup: beforeunload 이벤트 해제 & 인터벌 클리어
      window.removeEventListener("beforeunload", handleBeforeUnload)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
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

export default AsyncLoopStopBeforeUnloadTab
