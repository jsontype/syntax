'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

async function getData(sort: string = 'rating', limit: number = 20): Promise<Movie[]> {
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data.data.movies
}

type Props = {
  searchParams: {
    sort: string
    limit: number
  }
}

export default function MoviesList({ searchParams }: Props) {
  const { data: movies = [] } = useQuery({
    queryKey: ['movies', searchParams.sort, searchParams.limit],
    queryFn: () => getData(searchParams.sort, searchParams.limit),
  })

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </h2>
          <p>
            <Image src={movie.large_cover_image} alt={movie.title} width={500} height={750} />
          </p>
        </div>
      ))}
    </div>
  )
}
