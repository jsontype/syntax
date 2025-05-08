import BackButton from '@/app/components/BackButton'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import MovieDetail from '@/app/components/MovieDetail'

type Movie = {
  id: number
  url: string
  imdb_code: string
  title?: string | null
  title_english?: string | null
  title_long?: string
  slug?: string | null
  year: number
  rating: number
  runtime: number
  genres: string[]
  like_count?: number
  description_intro?: string | null
  description_full?: string | null
  yt_trailer_code?: string | null
  language?: string | null
  mpa_rating?: string | null
  medium_screenshot_image1?: string
  medium_screenshot_image2?: string
  medium_screenshot_image3?: string
  large_screenshot_image1?: string
  large_screenshot_image2?: string
  large_screenshot_image3?: string
}

// 서버 요청 함수 (params.id 사용)
async function getData(id: string): Promise<Movie> {
  const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`, {
    cache: 'force-cache', // SSG. 단일 영화 데이터는 안 바뀌므로 캐싱한다.
  })
  const data = await response.json()
  return data.data.movie // 단일 영화 데이터
}

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // 서버 사이드에서 QueryClient 생성
  const queryClient = new QueryClient()

  // 서버 사이드에서 데이터 프리페칭
  await queryClient.prefetchQuery({
    queryKey: ['movies', 'detail', id],
    queryFn: () => getData(id),
  })

  return (
    <div>
      <BackButton />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MovieDetail id={id} />
      </HydrationBoundary>
    </div>
  )
}
