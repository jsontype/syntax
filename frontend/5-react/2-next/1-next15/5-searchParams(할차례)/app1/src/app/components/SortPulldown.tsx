'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function SortPulldown() {
  // 클라이언트 컴포넌트에서 searchParams를 사용하려면 useSearchParams()를 임포트해서 사용해야 함.
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    const sortOption = new URLSearchParams(searchParams.toString())
    sortOption.set('sort', selected)
    router.replace(`?${sortOption.toString()}`)
  }

  const currentSort = searchParams.get('sort') || 'rating'

  return (
    <form>
      <label htmlFor="sort-select">정렬 기준: </label>
      <select id="sort-select" value={currentSort} onChange={handleChange}>
        <option value="title">제목</option>
        <option value="year">연도</option>
        <option value="rating">평점</option>
      </select>
    </form>
  )
}
