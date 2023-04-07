import React, { useState, useEffect } from "react"
// axios 임포트
import axios from "axios"

export default function Users() {
  // 1. state 선언
  const [users, setUsers] = useState(null) // 요청결과 state 선언
  const [loading, setLoading] = useState(false) // 로딩상태 state 선언
  const [error, setError] = useState(null) // 에러 state 선언

  // 2. async/await를 통해서 axios로 api를 호출
  const fetchUsers = async () => {
    // useEffect에 첫번째 파라미터로 등록하는 함수에는 async를 사용할 수 없으므로 함수 내부에서 async를 사용하는 새로운 함수를 선언했다.
    try {
      // 요청이 시작 할 때에는 error와 users를 초기화하고
      setError(null)
      setUsers(null)
      // loading 상태를 true 로 바꾼다.
      setLoading(true)

      // axios로 api를 호출한다.
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      // const response = await axios.get('https://jsonplaceholder.typicode.com/usersError') // 잘못된 api 호출시 에러출력 테스트용 토글
      // response.data 안에 들어있는 데이터로 요청결과 state를 설정
      setUsers(response.data)
      // 잘못된 api 호출시 에러를 출력
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!users) return null

  // 3. XML에서 map을 통해 api 호출 결과를 렌더링
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  )
}
