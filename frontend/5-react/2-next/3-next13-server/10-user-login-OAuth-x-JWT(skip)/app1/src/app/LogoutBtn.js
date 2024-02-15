"use client"

// 5. signOut 함수를 사용해 authOptions에 저장해둔 로그아웃을 실시하는 버튼 컴포넌트를 작성한다.
import { signOut } from "next-auth/react"

export default function LoginBtn() {
  return (
    <button
      onClick={() => {
        signOut()
      }}
    >
      로그아웃
    </button>
  )
}
