import React from "react"
import { useParams } from "react-router-dom"

// 프로필에서 사용할 데이터
const profileData = {
  kim: {
    name: "김민준",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  yang: {
    name: "양승완",
    description: "Fullstack Engineer @ Samsung Inc. 능력이 뛰어난 개발자",
  },
}

export default function Profile() {
  const params = useParams()
  const { username } = params
  const profile = profileData[username]

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      <h1>프로필페이지</h1>
      <p>이름 : {profile.name}</p>
      <p>설명 : {profile.description}</p>
    </div>
  )
}
