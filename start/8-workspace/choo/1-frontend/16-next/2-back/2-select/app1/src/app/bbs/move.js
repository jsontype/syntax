"use client"

import { useRouter } from "next/navigation"

export default function Move({ url, title }) {
  const router = useRouter()

  return (
    <div>
      {title}
      <button
        onClick={() => {
          router.push(url)
        }}
      >
        자세히보기{" "}
      </button>
    </div>
  )
}
