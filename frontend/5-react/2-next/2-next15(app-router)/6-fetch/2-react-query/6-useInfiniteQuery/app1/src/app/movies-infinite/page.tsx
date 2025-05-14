import SetCookieButton from '@/app/components/SetCookieButton'
import SortPulldown from '@/app/components/SortPulldown'
import { headers, cookies } from 'next/headers'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import MoviesInfiniteList from '@/app/components/MoviesInfiniteList'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// 서버 요청 함수
async function getData(sort: string = 'rating', page: number = 1, limit: number = 10): Promise<{
  movies: Movie[],
  movie_count: number,
  page_number: number,
  limit: number
}> {
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}&page=${page}`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return {
    movies: data.data.movies,
    // 상단 카드 표시 용도: 총 영화 수
    movie_count: data.data.movie_count,
    // 상단 카드 표시 용도: 현재 페이지 번호
    page_number: page,
    // 상단 카드 표시 용도: 한 번에 불러오는 영화 수
    limit: limit
  }
}

type Props = {
  searchParams: Promise<{
    sort: string
    limit: number
  }>
}

export default async function SSR({ searchParams }: Props) {
  const query = await searchParams

  const headersList = await headers()
  const cookiesList = await cookies()

  const headerUserAgent = headersList.get('user-agent') || '알 수 없음'
  const cookieMyToken = cookiesList.get('myToken')?.value || '토큰 없음'

  console.log('header / UserAgent: ', headerUserAgent)
  console.log('cookie / MyToken: ', cookieMyToken)

  // 서버 사이드에서 QueryClient 생성
  const queryClient = new QueryClient()

  // 서버 사이드에서 데이터 프리페칭 (첫 페이지만)
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['movies', 'infinite', query.sort, query.limit],
    queryFn: ({ pageParam = 1 }) => getData(query.sort, pageParam, query.limit),
    // 초기 페이지 번호: 무한 스크롤에서는 이 키가 반드시 있어야 한다. 없으면 안 된다.
    // 여기 SSR 컴포넌트에서는 처음 페이지 로딩시의(prefetchInfiniteQuery 함수 호출시의) 초기 페이지 번호가 된다.
    initialPageParam: 1,
  })

  return (
    <div>
      <div className="flex justify-between">
        <h1>SSR 무한 스크롤: 무비 리스트</h1>
        <SortPulldown />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <MoviesInfiniteList searchParams={query} />
      </HydrationBoundary>

      <SetCookieButton token="myToken" content="abcdefg!!!" />
    </div>
  )
}
