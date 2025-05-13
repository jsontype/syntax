import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import MoviesPaginatedList from '@/app/components/MoviesPaginatedList'
import SortPulldown from '@/app/components/SortPulldown'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// 서버 요청 함수
async function getData(page: number = 1, sort: string = 'rating', limit: number = 20): Promise<{ movies: Movie[], totalPages: number }> {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}&page=${page}`,
    { cache: 'no-store' }
  )
  const data = await response.json()
  return {
    movies: data.data.movies,
    totalPages: Math.ceil(data.data.movie_count / limit)
  }
}

type Props = {
  searchParams: Promise<{
    sort: string
    limit: number
  }>
}

export default async function MoviesPagination({ searchParams }: Props) {
  const query = await searchParams
  const queryClient = new QueryClient()

  // 초기 데이터 프리페칭
  await queryClient.prefetchQuery({
    queryKey: ['movies', 'pagination', query.sort, query.limit, 1],
    queryFn: () => getData(1, query.sort, query.limit),
  })

  return (
    <div>
      <div className="flex justify-between">
        <h1>페이지네이션: 무비 리스트</h1>
        <SortPulldown />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <MoviesPaginatedList searchParams={query} />
      </HydrationBoundary>
    </div>
  )
}
