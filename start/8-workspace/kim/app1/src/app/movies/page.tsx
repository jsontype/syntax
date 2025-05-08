import SetCookieButton from '@/app/components/SetCookieButton'
import SortPulldown from '@/app/components/SortPulldown'
import { headers, cookies } from 'next/headers'
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query'
import MoviesList from '@/app/components/MoviesList'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// 서버 요청 함수: 파라미터에 초기값을 넣어서 null 체크를 하지 않아도 된다.
async function getData(sort: string = 'rating', limit: number = 20): Promise<Movie[]> {
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data.data.movies
}

// searchParams의 Props 타입을 이렇게 선언해도 된다. 단 Next15부터는 searchParams가 비동기이므로 Promise를 쓰는 것을 잊지 말자.
type Props = {
  searchParams: Promise<{
    sort: string
    limit: number
  }>
}

export default async function SSR({ searchParams }: Props) {
  // 서버 컴포넌트에서 searchParams를 사용하려면 Props로 받아야 함.
  // Next15에서는 searchParams에 await가 필요함. (25/4/21 메모: VSCode는 업데이트가.. 불필요하다고 뜨지만 있어야함...)
  // 단수일 때는 { id } 이렇게 비구조화 할당으로 하겠지만, 복수일 때는 아래처럼 선언 후, query.sort, query.limit 식으로 쓴다.
  const query = await searchParams

  const headersList = await headers()
  const cookiesList = await cookies()

  const headerUserAgent = headersList.get('user-agent') || '알 수 없음'
  const cookieMyToken = cookiesList.get('myToken')?.value || '토큰 없음'

  console.log('header / UserAgent: ', headerUserAgent)
  console.log('cookie / MyToken: ', cookieMyToken)

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['movies', query.sort, query.limit],
    queryFn: () => getData(query.sort, query.limit),
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
