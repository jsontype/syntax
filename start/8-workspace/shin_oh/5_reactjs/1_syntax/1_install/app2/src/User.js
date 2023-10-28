import React from 'react'
import './User.css'

export default function User({ userName, isPremium, isVIP, isHackUser, email }) {
  const plan = isPremium === "premium" ? "premium" : isPremium === "trial user" ? "trial user" : "free"
  const vip = isVIP && "VIP"
  const eMail = email || "이메일주소가 아직 등록되지 않았습니다."
  const hackUser = isHackUser || "정상"
  const hackUserWarningMsg = isHackUser && "이 유저는 비정상 로그 기록이 있는 유저입니다. 주의가 필요합니다."

  return (
    <>
      <div>유저명 : {userName} </div>
      <div>가입플랜 : {plan} {vip} {hackUser}</div>
      <div>Email : {eMail}</div>
      <div className='red'>{hackUserWarningMsg}</div>
      <hr />
    </>
  )
}
