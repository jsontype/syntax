'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

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

export default function MovieDetailPage() {
  const id = useParams().id as string

  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch movie')
        }
        const data: YTSResponse = await response.json()
        // movies 배열의 첫 번째 요소를 사용합니다.
        setMovie(data.data.movie)
        setLoading(false)
      } catch (error) {
        setError(String(error))
        setLoading(false)
      }
    }
    fetchMovie()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  if (!movie) return <div>Movie not found</div>

  return (
    <div>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <h1>{movie.title}</h1>
      <div className="movie-detail">
        <Image
          src={movie.large_cover_image}
          alt={movie.title}
          width={400}
          height={600}
        />
        <div className="movie-info">
          <p>Rating: {movie.rating}</p>
          <p>Year: {movie.year}</p>
          <p>Genres: {movie.genres.join(', ')}</p>
          <p>Summary: {movie.summary}</p>
        </div>
      </div>
    </div>
  )
}
