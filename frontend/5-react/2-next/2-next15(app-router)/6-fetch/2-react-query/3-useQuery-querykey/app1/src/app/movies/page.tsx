import SetCookieButton from '@/app/components/SetCookieButton'
import SortPulldown from '@/app/components/SortPulldown'
import { headers, cookies } from 'next/headers'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import MoviesList from '@/app/components/MoviesList'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// 서버 요청 함수
async function getData(sort: string = 'rating', limit: number = 20): Promise<Movie[]> {
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data.data.movies
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

  // 서버 사이드에서 데이터 프리페칭
  await queryClient.prefetchQuery({
    queryKey: ['movies', 'list', query.sort, query.limit], // 쿼리 키
    queryFn: () => getData(query.sort, query.limit), // 실제 데이터를 가져오는 함수
  })

  return (
    <div>
      <div className="flex justify-between">
        <h1>SSR: 무비 리스트</h1>
        <SortPulldown />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <MoviesList searchParams={query} />
      </HydrationBoundary>

      <SetCookieButton token="myToken" content="abcdefg!!!" />
    </div>
  )
}
