'use client'

import { useState, useEffect, memo, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const SortPulldown = memo(() => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const sortQuery = searchParams.get('sort')
  const limitQuery = searchParams.get('limit')

  // CSR에서는 useSearchParams을 통해서 searchParams 정보를 추출한다.
  const [sort, setSort] = useState(sortQuery || 'rating')
  const [itemPerPage, setItemPerPage] = useState(Number(limitQuery) || 10)

  // pulldown 선택값이 update 될 시, state 값 변경
  useEffect(() => {
    if (sortQuery) setSort(sortQuery)
    if (limitQuery) setItemPerPage(Number(limitQuery))
  }, [sortQuery, limitQuery])

  // 이벤트 함수들
  const handleChangeSort = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }, [])

  const handleChangeItemPerPage = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemPerPage(Number(e.target.value))
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 새로운 URL 생성
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sort)
    params.set('limit', itemPerPage.toString())

    // App Router에서는 router.push로 이동 (내장 캐시 없이 데이터 가져오게 설정됨)
    router.push(`/movies?${params.toString()}`)
  }, [router, searchParams, sort, itemPerPage])

  return (
    <form onSubmit={handleSubmit} className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label htmlFor="sort-select" className="mr-2 text-black">정렬 기준:</label>
          <select
            className="px-3 py-1 border rounded text-black"
            id="sort-select"
            value={sort}
            onChange={handleChangeSort}
          >
            <option value="rating">평점</option>
            <option value="title">제목</option>
            <option value="year">연도</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="limit-select" className="mr-2 text-black">표시:</label>
          <select
            className="px-3 py-1 border rounded text-black"
            id="limit-select"
            value={itemPerPage}
            onChange={handleChangeItemPerPage}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          적용
        </button>
      </div>
    </form>
  )
})

SortPulldown.displayName = 'SortPulldown'

export default SortPulldown
