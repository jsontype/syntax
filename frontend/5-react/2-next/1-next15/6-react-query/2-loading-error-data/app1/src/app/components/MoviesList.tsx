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

// 서버 사이드에서 데이터 프리패칭 함수
async function getData(sort: string = 'rating', limit: number = 20): Promise<Movie[]> {
  // * 주석 풀 것: 테스트를 위해 100% 확률로 에러 발생
  // if (Math.random() !== 0) {
  //   throw new Error('API 호출 실패')
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
  /*
    SSR에서 react-query를 사용해 로딩과 에러 처리를 구현 : SSR에서는 이미 데이터를 프리페칭 하기 때문에, 초기 로딩이 보이지 않는다. 
    그러므로 isLoading이 아니라 isFetching으로 처리해야 한다. isFetching은 데이터를 가져오는 모든 과정에서 true가 된다.
  */
  const { data: movies = [], isFetching, error } = useQuery({
    queryKey: ['movies', searchParams.sort, searchParams.limit],
    queryFn: () => getData(searchParams.sort, searchParams.limit),
  })

  // SSR에서 로딩 처리: 정렬 Pulldown 버튼을 누를 때마다 로딩이 표시되는 것을 확인할 수 있다.
  if (isFetching) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="text-lg text-gray-600">영화 목록을 불러오는 중...</p>
      </div>
    )
  }

  // SSR에서 에러 처리: 위의 "* 주석 풀 것"을 풀면, 아래의 "영화 목록을 불러오는 중 오류가 발생했습니다." 라는 메시지가 표시될 것이다.
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="text-red-500 text-4xl">⚠️</div>
        <p className="text-lg text-gray-600">영화 목록을 불러오는 중 오류가 발생했습니다.</p>
        <p className="text-sm text-gray-500">잠시 후 다시 시도해주세요.</p>
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
