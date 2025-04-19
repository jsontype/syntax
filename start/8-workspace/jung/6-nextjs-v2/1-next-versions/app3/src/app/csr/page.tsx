'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Movie = {
  id: number
  title: string
  url: string
  large_cover_image: string
}

export default function CSR() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    setLoading(true)
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.data.movies)
      })
      .catch((error) => {
        setError('영화 정보를 가져오는 데 실패했습니다. 원인: ' + error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const render = movies.map((movie) => (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <p>
        <Link href={movie.url}>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
          />
        </Link>
      </p>
    </div>
  ))

  return (
    <div>
      <h1>CSR 페이지</h1>

      <div>{loading ? <div>Loading...</div> : error ? <div>{error}</div> : render}</div>
    </div>
  )
}
