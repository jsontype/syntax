import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { token, content } = await request.json()

  if (!token || !content) {
    return NextResponse.json(
      { error: "token, content required" },
      { status: 400 }
    )
  }

  const maxAge = 60 * 60 * 24 * 7 // 7일
  const response = NextResponse.json({ ok: true }, { status: 200 })

  response.cookies.set({
    name: token,
    value: content,
    httpOnly: true,
    secure: true,
    maxAge: maxAge,
    path: "/",
    sameSite: "strict",
  })

  return response
}
