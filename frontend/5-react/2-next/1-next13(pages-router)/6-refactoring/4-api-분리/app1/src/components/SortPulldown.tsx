import { useState, useEffect, memo, useCallback } from 'react'
import { useRouter } from 'next/router'

const SortPulldown = memo(() => {
  const router = useRouter()
  const { sort: sortQuery, limit: limitQuery } = router.query

  // CSR에서는 useRouter의 query를 통해서 searchParams 정보를 추출한다. 그런데, 방식이 params 정보 추출할 때와 똑같다.
  const [sort, setSort] = useState(sortQuery as string || 'rating') // sortQuery
  const [itemPerPage, setItemPerPage] = useState(Number(limitQuery) || 10) // limitQuery

  // pulldown 선택값이 update 될 시, state 값 변경
  useEffect(() => {
    if (sortQuery) setSort(sortQuery as string)
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
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort, limit: itemPerPage.toString() }
    })
  }, [router, sort, itemPerPage])

  return (
    <form onSubmit={handleSubmit} className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label htmlFor="sort-select" className="mr-2">정렬 기준:</label>
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
          <label htmlFor="limit-select" className="mr-2">표시:</label>
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
