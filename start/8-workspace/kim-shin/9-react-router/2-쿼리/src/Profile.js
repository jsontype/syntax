import React from "react"
// 파라미터값을 받기 위해 useParams 임포트
import { useParams } from "react-router-dom"

// 프로필에서 사용 할 데이터
const profileData = {
  jsontype: {
    name: "D.Yang",
    description: "Frontend Engineer",
  },
  kimkim12: {
    name: "K.Kim",
    description: "Backend Engineer",
  },
}

export default function Profile() {
  const params = useParams()
  const username = params.username
  const profileItem = profileData[username]

  return (
    <div>
      <h3>{username}의 프로필</h3>
      <p>이름 : {profileItem.name}</p>
      <p>설명 : {profileItem.description}</p>
    </div>
  )
}
