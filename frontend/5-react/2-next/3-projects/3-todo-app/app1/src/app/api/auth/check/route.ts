import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { getUserFromToken } from "@/lib/auth"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    if (!token) {
      return NextResponse.json({ user: null })
    }

    const user = await getUserFromToken(token)
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ user: null })
  }
}
