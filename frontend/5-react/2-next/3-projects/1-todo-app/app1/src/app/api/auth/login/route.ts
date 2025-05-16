import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { authenticateUser, createToken } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: "사용자 이름과 비밀번호를 입력해주세요." },
        { status: 400 }
      )
    }

    const user = await authenticateUser(username, password)
    if (!user) {
      return NextResponse.json(
        { error: "잘못된 사용자 이름 또는 비밀번호입니다." },
        { status: 401 }
      )
    }

    const token = await createToken(user)
    const cookieStore = await cookies()
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json(
      { error: "로그인 중 오류가 발생했습니다." },
      { status: 500 }
    )
  }
}
