"use client"
// 이벤트 처리는 Client 컴포넌트에서만 사용가능하다.

import { useRouter } from "next/navigation"

export default function Move({ id, title }) {
  const router = useRouter()

  return (
    <button
      // Delete는 따로 Form이 없으므로 별도의 bbs/delete 폴더가 없고,
      onClick={() => {
        // 그냥 여기에서 바로 Delete API를 호출한다.
        // 호출 방식은 fetch.then(), 즉 "AJAX" 방식을 사용한다.
        fetch("/api/bbs/delete", {
          method: "DELETE",
          body: id,
        }).then(() => {
          router.push("/bbs")
          router.refresh()
        })
      }}
    >
      {title}
    </button>
  )
}
