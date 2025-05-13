"use server"

import { cookies } from "next/headers"

// token에 content를 저장하는 함수
export async function setLoginToken(token: string, content: string) {
  const cookiesList = await cookies()

  cookiesList.set(token, content, {
    httpOnly: true, // JS에서 접근 못하게 (XSS 또는 CSRF 방지)
    secure: true, // HTTPS에서만
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7일
  })
}
