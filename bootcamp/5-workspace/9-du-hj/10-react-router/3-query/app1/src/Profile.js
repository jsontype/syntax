import React from 'react'
import { useParams } from 'react-router-dom'

const profiles = {
  jsontype: {
    name: 'Yang',
    description: 'FE Engineer'
  },
  dududu: {
    name: 'Du',
    description: 'BE Engineer'
  }
}

export default function Profile() {
  // useParam : 파라미터를 받아오는 함수
  const params = useParams()
  const { username } = params
  const profile = profiles[username]
  if (!profile) { return <div>존재안함</div> }
  return (
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  )
}
