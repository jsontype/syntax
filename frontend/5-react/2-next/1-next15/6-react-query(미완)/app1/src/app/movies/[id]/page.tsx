import BackButton from '@/app/components/BackButton'
import MovieDetailComment from '@/app/components/MovieDetailComment'

type Cast = {
  name: string
  character_name: string
  url_small_image: string
  imdb_code: string
}

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
  cast?: Cast[]
}

// 서버 요청 함수 (params.id 사용)
async function getData(id: string): Promise<Movie> {
  const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`, {
    cache: 'force-cache', // SSG. 단일 영화 데이터는 안 바뀌므로 캐싱한다.
  })
  const data = await response.json()
  console.log('data: ', data)
  return data.data.movie // 단일 영화 데이터
}

export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  // (중요) Next15에서는 서버컴포넌트에서 params를 받을 때, params의 타입을 Promise로 감싸야하며, 사용할 때 await를 써야한다. import 불필요.
  const movieId = (await params).id

  const movie = await getData(movieId)

  console.log('movie: ', movie)

  return (
    <div>
      {/* ***! */}
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
      <h3 className="text-sm text-gray-500">ReviewCat133: 너무 재밌어요.</h3>
      <h3 className="text-sm text-gray-500">Ydh1133: 재미없어요.</h3>

      <h2>출연진:</h2>
      {movie.cast?.length ? (
        <ul>
          {movie.cast.map((actor) => (
            <li key={actor.imdb_code}>
              <img src={actor.url_small_image} alt={actor.name} width={50} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <strong>{actor.name}</strong> — {actor.character_name}
            </li>
          ))}
        </ul>
      ) : (
        <p>-</p>
      )}

      <h2>스크린샷:</h2>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {[movie.medium_screenshot_image1, movie.medium_screenshot_image2, movie.medium_screenshot_image3]
          .filter(Boolean)
          .map((src, i) => (
            <img key={i} src={src!} alt={`screenshot${i + 1}`} width={300} />
          ))}
      </div>
    </div>
  )
}
