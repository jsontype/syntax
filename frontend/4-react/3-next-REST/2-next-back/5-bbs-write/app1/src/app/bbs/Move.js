"use client"

import { useRouter } from "next/navigation"

export default function Move({ url, title }) {
  const router = useRouter()
  // ★★ "next/navigation"에서 제공하는 다른 Hooks들
  // const a = usePathname() // 현재의 url을 출력한다.
  // const a = useParams() // 현재의 params(path, 예를 들면 /bbs)를 출력한다.
  // const a = useSearchParams() // 현재의 search params(query, 예를 들면 ?id=1)를 출력한다.
  // console.log(a)

  return (
    <button
      onClick={() => {
        router.push(url) // 해당 url로 이동
        // ★★ "next/navigation"에서 제공하는 useRouter Hooks에서 제공하는 push 외의 다른 함수들
        // router.back() // 뒤로 이동
        // router.front() // 앞으로 이동
        // router.refresh() // 새로 고침
      }}
    >
      {title}
    </button>
  )
}
