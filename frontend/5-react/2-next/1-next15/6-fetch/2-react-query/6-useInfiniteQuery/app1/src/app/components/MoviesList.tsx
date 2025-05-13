'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useQuery, useQueryClient } from '@tanstack/react-query'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// API 호출 함수
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
  const queryClient = useQueryClient()
  const queryKey = ['movies', 'list', searchParams.sort, searchParams.limit]

  /*
    SSR에서 react-query를 사용해 로딩과 에러 처리를 구현 : SSR에서는 이미 데이터를 프리페칭 하기 때문에, 초기 로딩이 보이지 않는다. 
    그러므로 isLoading이 아니라 isFetching으로 처리해야 한다. isFetching은 데이터를 가져오는 모든 과정에서 true가 된다.
  */
  const {
    data: movies = [],
    isFetching,
    error,
    isStale,  // 데이터가 stale 상태인지 여부
    isLoading, // 데이터가 없고 로딩 중인지 여부
    dataUpdatedAt // 데이터가 마지막으로 업데이트된 시간
  } = useQuery({
    queryKey,
    queryFn: () => getData(searchParams.sort, searchParams.limit),
  })

  // 타입스크립트에서 데이터 상태 타입 확인 방법
  console.log('쿼리 상태:', {
    isFetching, // 현재 데이터를 가져오는 중인지 여부
    isLoading,  // 데이터가 없고 로딩 중인지 여부 (캐시된 데이터가 없을 때)
    isStale,    // 데이터가 stale 상태인지 여부
    dataUpdatedAt, // 데이터가 마지막으로 업데이트된 시간
    // isError,    // 에러 발생 여부
    // isSuccess,  // 성공 여부
    // status,     // 'loading' | 'error' | 'success'
    // fetchStatus // 'fetching' | 'paused' | 'idle'
  })

  // 쿼리의 캐시된 데이터 보기
  const cachedData = queryClient.getQueryData(queryKey)
  console.log('캐시된 데이터:', cachedData)

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
      {/* 데이터 상태 표시 */}
      <div className="mb-4 p-3 border rounded-md">
        <h3 className="font-bold">데이터 상태</h3>
        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${isStale ? 'bg-yellow-400' : 'bg-green-500'}`}></span>
            <span>상태: {isStale ? '오래됨(Stale)' : '신선함(Fresh)'}</span>
          </div>
          <div>
            <span>마지막 업데이트: {dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : '없음'}</span>
          </div>

          {/* 쿼리 캐시 조회 */}
          <div>
            <button
              onClick={() => queryClient.getQueryData(queryKey)}
              className="px-2 py-1 bg-gray-500 text-white rounded-md text-xs">
              캐시 조회 (Get)
            </button>
          </div>

          {/* 쿼리 캐시 수동 재요청 */}
          <div>
            <button
              onClick={() => queryClient.refetchQueries({ queryKey })}
              className="px-2 py-1 bg-purple-500 text-white rounded-md text-xs">
              수동 재요청 (Refetch)
            </button>
          </div>

          {/* 쿼리 캐시 제거 */}
          <div>
            <button
              onClick={() => queryClient.removeQueries({ queryKey })}
              className="px-2 py-1 bg-red-500 text-white rounded-md text-xs">
              캐시 제거 (Remove)
            </button>
          </div>

          {/* 쿼리 캐시 무효화 */}
          <div>
            <button
              onClick={() => queryClient.invalidateQueries({ queryKey })}
              className="px-2 py-1 bg-blue-500 text-white rounded-md text-xs">
              강제 갱신 (Invalidate)
            </button>
          </div>

          {/* 쿼리 캐시 리셋 */}
          <div>
            <button
              onClick={() => queryClient.resetQueries({ queryKey })}
              className="px-2 py-1 bg-gray-500 text-white rounded-md text-xs">
              캐시 리셋 (Reset)
            </button>
          </div>

          {/* 쿼리 캐시 전체 제거 */}
          <div>
            <button
              onClick={() => queryClient.clear()}
              className="px-2 py-1 bg-gray-500 text-white rounded-md text-xs">
              모든 캐시 제거 (Clear)
            </button>
          </div>
        </div>
      </div>

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
