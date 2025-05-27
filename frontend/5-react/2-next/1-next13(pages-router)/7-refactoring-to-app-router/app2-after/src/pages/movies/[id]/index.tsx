import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import BackButton from '../../../components/BackButton'
import MovieDetailComment from '../../../components/MovieDetailComment'

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

type Props = {
  movie: Movie
}

// (필수) SSG를 위한 동적 라우팅의 경로 생성 함수: 빌드 시간 단축(불필요한 API 호출 제거), 서버 부하 감소, 필요한 페이지만 미리 생성, 존재하지 않는 ID에 대한 적절한 처리 등 SSG에 필수적인 기능들을 수행한다.
// ** getStaticProps에서 쓰는 fetch 경로가, 동적 경로가 아닌 고정된 경로인 경우는 이 함수가 필요없다.
export const getStaticPaths: GetStaticPaths = async () => {
  // 영화 목록을 가져와서 각 영화의 ID를 경로로 생성
  const response = await fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
  const data = await response.json()
  const movies = data.data.movies

  const paths = movies.map((movie: Movie) => ({
    params: { id: movie.id.toString() }
  }))

  return {
    paths,
    fallback: 'blocking' // paths에 없는 경로는 SSR로 처리
  }
}

// SSG 함수
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string
  const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
  const data = await res.json()

  return {
    props: {
      movie: data.data.movie
    },
    revalidate: 60 // 60초마다 재생성
  }
}

export default function MovieDetail({ movie }: Props) {
  return (
    <div>
      <BackButton />

      <h1>상세페이지</h1>
      <h2>ID: {movie.id}</h2>
      <h2>제목: {movie.title ?? '-'}</h2>
      <h2>영문제목: {movie.title_english ?? '-'}</h2>
      <h2>슬러그: {movie.slug ?? '-'}</h2>
      <h2>장르: {movie.genres?.length ? movie.genres.join(', ') : '-'}</h2>
      <h2>평점: {movie.rating || '-'}</h2>
      <h2>상영시간: {movie.runtime ? `${movie.runtime} min` : '-'}</h2>
      <h2>연도: {movie.year || '-'}</h2>
      <h2>트레일러: {movie.yt_trailer_code
        ? <a href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`} target="_blank">YouTube 보기</a>
        : '-'}</h2>
      <h2>언어: {movie.language ?? '-'}</h2>
      <h2>등급: {movie.mpa_rating ?? '-'}</h2>
      <h2>좋아요 수: {movie.like_count ?? '-'}</h2>
      <h2>설명: {movie.description_full ?? '-'}</h2>

      <MovieDetailComment />

      <h3 className="text-sm text-gray-500">아직 댓글이 없습니다.</h3>

      <h2>스크린샷:</h2>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {[movie.medium_screenshot_image1, movie.medium_screenshot_image2, movie.medium_screenshot_image3]
          .filter(Boolean)
          .map((src, i) => (
            <Image key={i} src={src!} alt={`screenshot${i + 1}`} width={300} height={300} />
          ))}
      </div>
    </div>
  )
}
