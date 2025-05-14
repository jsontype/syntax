'use client'

import { setLoginToken } from '@/app/actions/setCookie'

export default function SetCookieButton({ token, content }: { token: string; content: string }) {
  return (
    <button onClick={() => setLoginToken(token, content)}>
      로그인 토큰 설정 📍
    </button>
  )
}
