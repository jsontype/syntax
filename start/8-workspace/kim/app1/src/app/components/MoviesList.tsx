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
  // error 발생시키기 Toggle
  // if (Math.random() !== 0) {
  //   throw new Error('오류 발생')
  // }

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
  const { data: movies = [], isFetching, error } = useQuery({
    queryKey: ['movies', searchParams.sort, searchParams.limit],
    queryFn: () => getData(searchParams.sort, searchParams.limit),
  })

  if (isFetching) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="text-lg text-gray-600">영화 목록을 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <p className="text-lg text-red-600">오류가 발생했습니다.</p>
      </div>
    )
  }

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
