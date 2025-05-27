import { NextApiRequest, NextApiResponse } from "next"

export default function setLoginToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { token, content } = req.body

  if (!token || !content) {
    return res.status(400).json({ error: "token, content required" })
  }

  const maxAge = 60 * 60 * 24 * 7 // 7일

  res.setHeader(
    "Set-Cookie",
    `${token}=${encodeURIComponent(
      content
    )}; Path=/; HttpOnly; Secure; Max-Age=${maxAge}; SameSite=Strict`
  )
  res.status(200).json({ ok: true })
}
