'use client'

import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

// 🎯 API 응답 타입 정의
interface Movie {
  id: number
  title: string
  year: number
  rating: number
  genres: string[]
  large_cover_image: string
}

interface YTSResponse {
  data: {
    movies: Movie[]
  }
}

const API_URL = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

// 🎯 fetcher 함수 (SWR에서 사용할 데이터 가져오기 함수)
const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }
  return res.json()
}

// 🎯 클라이언트 컴포넌트
export default function MovieList({ initialData }: { initialData: YTSResponse }) {
  // * 먼저 화장을 해서 보여주고, 나중에 이 페이지에서 오래 머무를 경우, CSR에서 SWR을 사용하여 최신 데이터로 업데이트하는 것이 핵심.

  // SWR을 사용하여 데이터 패칭 (SSR을 지원): SWR은 일정 시간마다 자동으로 새 데이터를 가져와 갱신할 수 있음.
  const { data, error } = useSWR<YTSResponse>(
    API_URL, 
    fetcher, 
    // useSWR의 옵션
    { 
      // * fallbackData: 일단 API부터 빠른 로딩(= 부모의 page가 SSR인 이유). 서버에서 받은 초기 데이터를 제공
      fallbackData: initialData,
      // * revalidateOnFocus: true 옵션을 추가하면, 여기에 오래 머무를 경우 새로고침 없이도 최신 영화를 자동으로 반영할 수 있음.
      revalidateOnFocus: true
      // revalidateOnMount: true // * revalidateOnMount: true 옵션을 추가하면, 페이지가 로드될 때마다 새로고침하여 최신 영화를 반영할 수 있음.
      // revalidateOnReconnect: true // * revalidateOnReconnect: true 옵션을 추가하면, 페이지가 다시 연결될 때마다 새로고침하여 최신 영화를 반영할 수 있음.
      // refreshInterval: 1000 * 60 // * refreshInterval: 1분마다 새로고침하여 최신 영화를 반영할 수 있음.
    }
  )

  const movies = data?.data.movies

  if (error) return <div>Error: {error.message}</div>
  if (!movies) return <div>Loading...</div>

  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link href={`/movie-ssr/${movie.id}`}>
              <Image
                src={movie.large_cover_image}
                alt={movie.title}
                width={200}
                height={300}
                className="hover:opacity-80"
              />
              <h2 className="hover:opacity-80">{movie.title}</h2>
            </Link>
            <p>Rating: {movie.rating}</p>
            <p>Year: {movie.year}</p>
            <p>Genres: {movie.genres.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
