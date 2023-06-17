"use client"

import { useRouter } from "next/navigation"

export default function Move({ url, title }) {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        router.push(url) // 해당 url로 이동
      }}
    >
      {title}
    </button>
  )
}
