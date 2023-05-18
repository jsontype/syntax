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
    name: "K.Shin",
    description: "Backend Engineer",
  },
}

/**
 * URL내의 파라미터를 통해 username과 profile 정보를 추출하여 표시한다.
 * /profile/username 이런식으로 뒷부분에 username을 넣어줄 때 해당 값을 파라미터로 받을 것이다.
 */
export default function Profile() {
  // 파라미터를 받아올 땐 useParams() 값을 참조한다.
  const params = useParams()
  const { username } = params
  console.log(params)
  const profile = profileData[username]
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  )
}
