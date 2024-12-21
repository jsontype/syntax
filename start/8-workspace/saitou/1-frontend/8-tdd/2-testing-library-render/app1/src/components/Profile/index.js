import React from "react"

export default function Profile({ username, name }) {
  return (
    <div>
      <div>My Profile</div>
      <div>{username}</div>
      <div>{name}</div>
    </div>
  )
}
