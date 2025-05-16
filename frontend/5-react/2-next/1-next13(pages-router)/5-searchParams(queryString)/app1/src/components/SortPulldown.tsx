import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SortPulldown() {
  const router = useRouter()

  // CSR에서는 useRouter의 query를 통해서 searchParams 정보를 추출한다. 그런데, 방식이 params 정보 추출할 때와 똑같다.
  const { sort: sortQuery, limit: limitQuery } = router.query

  // 단, searchParams의 경우에는 url 값이 아닌, 유저 이벤트(여기서는 풀다운 선택)를 통해서 변경되므로, 변경 가능한 state에 담아서 처리를 해야 한다.
  const [sort, setSort] = useState(sortQuery as string || 'rating') // sortQuery
  const [itemPerPage, setItemPerPage] = useState(Number(limitQuery) || 10) // limitQuery

  // pulldown 선택값이 update 될 시, state 값 변경
  useEffect(() => {
    if (sortQuery) setSort(sortQuery as string)
    if (limitQuery) setItemPerPage(Number(limitQuery))
  }, [sortQuery, limitQuery])

  // 이벤트 함수들
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
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort, limit: itemPerPage.toString() }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="border-1 p-2">
      <label htmlFor="sort-select">정렬 기준: </label>
      <select className="text-black" id="sort-select" value={sort} onChange={handleChangeSort}>
        <option value="rating">평점</option>
        <option value="title">제목</option>
        <option value="year">연도</option>
      </select>
      <label htmlFor="sort-select" className="mx-4">표시: </label>
      <select className="text-black" id="sort-select" value={itemPerPage} onChange={handleChangeItemPerPage}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      <button type="submit" className="ml-4 mr-2 text-blue-500">적용</button>
    </form>
  )
}
