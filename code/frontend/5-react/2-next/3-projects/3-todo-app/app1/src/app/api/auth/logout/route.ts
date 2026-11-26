import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { deleteToken } from "@/lib/auth"

export async function POST() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    if (token) {
      await deleteToken(token)
      cookieStore.delete("token")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "로그아웃 중 오류가 발생했습니다." },
      { status: 500 }
    )
  }
}
