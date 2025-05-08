'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import MovieDetailComment from './MovieDetailComment'

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

async function getData(id: string): Promise<Movie> {
  const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`, {
    cache: 'force-cache',
  })
  const data = await response.json()
  return data.data.movie
}

type Props = {
  id: string
}

export default function MovieDetail({ id }: Props) {
  const { data: movie, isLoading } = useQuery({
    queryKey: ['movies', 'detail', id],
    queryFn: () => getData(id),
  })

  if (isLoading) return <div>로딩중...</div>
  if (!movie) return <div>영화를 찾을 수 없습니다.</div>

  return (
    <div>
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
