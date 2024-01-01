"use client"

import { useRouter } from "next/navigation"

export default function Move({ url, title }) {
  const router = useRouter()

  return (
    <div>
      <button
        onClick={() => {
          router.push(url)
        }}
      >
        {title}
      </button>
    </div>
  )
}
