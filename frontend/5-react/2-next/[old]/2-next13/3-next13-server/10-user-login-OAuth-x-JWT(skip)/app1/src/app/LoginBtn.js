"use client"

// 4. signIn 함수를 사용해 authOptions에 저장해둔 로그인을 실시하는 버튼 컴포넌트를 작성한다.
import { signIn } from "next-auth/react"

export default function LoginBtn() {
  return (
    <button
      onClick={() => {
        signIn()
      }}
    >
      로그인
    </button>
  )
}
