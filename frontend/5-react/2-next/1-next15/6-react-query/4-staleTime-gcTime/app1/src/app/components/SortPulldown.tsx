"use client"

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SortPulldown() {
  // 클라이언트 컴포넌트에서 searchParams를 사용하려면 useSearchParams()를 임포트해서 사용해야 함.
  const searchParams = useSearchParams()
  const router = useRouter()
  const [sort, setSort] = useState(String(searchParams.get('sort')) || 'rating')
  const [itemPerPage, setItemPerPage] = useState(Number(searchParams.get('itemPerPage')) || 10)

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    setSort(selected)
  }

  const handleChangeItemPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    setItemPerPage(Number(selected))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.replace(`?limit=${itemPerPage.toString()}&sort=${sort}`)
  }

  return (
    <form onSubmit={handleSubmit} className="border-1 p-2">
      <label htmlFor="sort-select">정렬 기준: </label>
      <select id="sort-select" value={sort} onChange={handleChangeSort}>
        <option value="title">제목</option>
        <option value="year">연도</option>
        <option value="rating">평점</option>
      </select>
      <label htmlFor="sort-select" className="mx-4">표시: </label>
      <select id="sort-select" value={itemPerPage} onChange={handleChangeItemPerPage}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      <button type="submit" className="ml-4 mr-2 text-blue-500">적용</button>
    </form>
  )
}
