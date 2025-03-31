import Image from 'next/image'
import { Metadata } from 'next'

// 서버 클라이언트는 렌더링 후 로딩이 없으므로 Loading... 표시 불필요

interface Movie {
  id: number
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  summary: string
  description_full: string
  synopsis: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
  state: string
  torrents: string[]
  date_uploaded: string
  date_uploaded_unix: number
}

interface YTSResponse {
  status: string
  status_message: string
  data: {
    movie_count: number
    limit: number
    page_number: number
    movie: Movie
  }
}

// ✅ ** 메타데이터 설정 **
export const metadata: Metadata = {
  title: '영화 상세 페이지',
  description: '영화의 상세 정보',
}

// ✅ **서버에서 영화 데이터 가져오기**
async function fetchMovie(id: string): Promise<Movie | null> {
  try {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
      { cache: 'no-store' }
    )
    if (!response.ok) {
      throw new Error('Failed to fetch movies')
    }
    const data: YTSResponse = await response.json()
    return data.data.movie
  } catch (error) {
    console.error(error)
    return null
  }
}

// ✅ `params.id`를 활용해 서버에서 데이터 가져옴
export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie = await fetchMovie(params.id)
  // ❌ 로딩 필요 없음 → "Movie Not Found" 바로 표시
  if (!movie) return <div>❌ Movie Not Found</div>

  return (
    <div>
      <h1>{movie.title}</h1>
      <div className="movie-detail">
        <Image src={movie.large_cover_image} alt={movie.title} width={400} height={600} />
        <div className="movie-info">
          <p>⭐ Rating: {movie.rating}</p>
          <p>📅 Year: {movie.year}</p>
          <p>🎭 Genres: {movie.genres.join(', ')}</p>
          <p>📖 Summary: {movie.summary}</p>
        </div>
      </div>
    </div>
  )
}
