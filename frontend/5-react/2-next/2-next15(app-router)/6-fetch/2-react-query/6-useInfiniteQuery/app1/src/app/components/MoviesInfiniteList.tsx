'use client'

import Link from 'next/link'
import Image from 'next/image'
// 무한 스크롤 훅 함수 임포트
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

type MovieResponse = {
  movies: Movie[]
  movie_count: number
  page_number: number
  limit: number
}

type Props = {
  searchParams: {
    sort: string
    limit: number
  }
}

// API 호출 함수
async function getData(sort: string = 'rating', page: number = 1, limit: number = 10): Promise<MovieResponse> {
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}&page=${page}`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return {
    movies: data.data.movies,
    // 상단 카드 표시 용도: 총 영화 수
    movie_count: data.data.movie_count,
    // 상단 카드 표시 용도: 현재 페이지 번호
    page_number: page,
    // 상단 카드 표시 용도: 한 번에 불러오는 영화 수
    limit: limit
  }
}

export default function MoviesInfiniteList({ searchParams }: Props) {
  const queryClient = useQueryClient()
  const queryKey = ['movies', 'infinite', searchParams.sort, searchParams.limit]

  // 다음 페이지 존재 여부 state: 무한 스크롤에서, 더 이상 불러올 영화가 없으면 false로 설정
  const [hasNextPage, setHasNextPage] = useState(true)
  // 무한 스크롤 감지 영역 ref: 스크롤이 이 observerTarget 밑으로 내려갈 경우, 무한 스크롤 감지 영역 태그가 보여지고, 그때 무한 스크롤 발동: IntersectionObserver에서 사용
  const observerTarget = useRef<HTMLDivElement>(null)

  const {
    data,
    fetchNextPage, // 무한 스크롤 시의 다음 페이지 호출 함수
    isFetchingNextPage, // 무한 스크롤 시의 다음 페이지 로딩 상태
    error, // 무한 스크롤 시의 에러 상태: 에러 객체 (error.message 등)
    status // 무한 스크롤 시의 데이터 상태: 'pending' | 'error' | 'success'
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => getData(searchParams.sort, pageParam, searchParams.limit),
    // 초기 페이지 번호: 무한 스크롤에서는 이 키가 반드시 있어야 한다. 없으면 안 된다.
    // 여기 CSR 컴포넌트에서는 SortPulldown에서 요청을 해서 재렌더링 되었을 때의 초기 페이지 번호가 된다.
    initialPageParam: 1,
    // 다음 페이지 호출 함수: 무한 스크롤 시의 다음 페이지 호출 함수
    getNextPageParam: (lastPage, allPages) => {
      // 더 이상 불러올 영화가 없으면 undefined 반환 (무한 스크롤 중지)
      const fetchedMoviesCount = allPages.reduce((total, page) => total + page.movies.length, 0)
      const totalMovieCount = lastPage.movie_count
      // 더 이상 불러올 영화가 없으면 false로 설정
      if (fetchedMoviesCount >= totalMovieCount) {
        setHasNextPage(false)
        return undefined
      }
      // 다음 페이지가 존재하면, 다음 페이지 번호 반환
      return lastPage.page_number + 1
    },
  })

  // 인터섹션 옵저버를 사용하여 무한 스크롤 구현
  // 인터섹션 옵저버란?: 특정 요소가 화면에 보이는지 여부를 감지하는 자바스크립트 API
  useEffect(() => {
    // 인터섹션 옵저버 객체 생성
    const observer: IntersectionObserver = new IntersectionObserver(
      // entries는 인터섹션 옵저버가 제공하는 배열. 배열의 값들은 감지된 태그의 정보를 담고 있는 객체들이다.
      (entries: IntersectionObserverEntry[]) => {
        // useRef로 선언한 observerTarget 태그가 감지됐고, 다음 페이지가 존재하고, 다음 페이지 로딩 상태가 아니면, 다음 페이지를 호출하라.
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      // threshold는 몇 % 보여지면 다음 페이지를 호출할지 설정하는 값. 즉, 아래는 observerTarget 태그가 50% 보여지는 경우, 다음 페이지를 호출함
      { threshold: 0.5 }
    )

    // observerTarget 태그를 감지 대상의 태그로 설정: useRef로 선언했기 때문에, current가 필요하다.
    const currentTarget = observerTarget.current

    // 위에서 생성한, 인터섹션 옵저버 객체(observer) 안의 observe 메서드를 사용해서, observerTarget 태그를 감지하도록 설정
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    // useEffect 훅에서 destory 라이프사이클: 컴포넌트가 사라질 때, 인터섹션 옵저버 객체를 해제하는 작업을 수행
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  // 첫 로딩 처리
  if (status === 'pending' && !isFetchingNextPage) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="text-lg text-gray-600">영화 목록을 불러오는 중...</p>
      </div>
    )
  }

  // 에러 처리
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="text-red-500 text-4xl">⚠️</div>
        <p className="text-lg text-gray-600">영화 목록을 불러오는 중 오류가 발생했습니다.</p>
        <p className="text-sm text-gray-500">잠시 후 다시 시도해주세요.</p>
      </div>
    )
  }

  // 모든 페이지의 영화 목록 병합
  const movies = data?.pages.flatMap(page => page.movies) || []

  return (
    <div className="space-y-8 pt-14">
      {/* 데이터 상태 표시 - 스크롤 시 원래 위치 그대로 고정, 상단 네비게이션 아래로 조정 */}
      <div className="sticky top-20 mb-4 p-3 border rounded-md bg-black shadow-md z-10 text-white">
        <h3 className="font-bold">데이터 상태</h3>
        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div>
            <span>현재 불러온 영화: {movies.length}개</span>
          </div>
          <div>
            <span>총 영화 수: {data?.pages[0]?.movie_count || 0}개</span>
          </div>

          {/* 총 불러온 페이지수  */}
          <div>
            <span>총 불러온 페이지수: {data?.pages.length || 0}</span>
          </div>

          {/* 한 번에 불러오는 영화 수 */}
          <div>
            <span>한 번에 불러오는 영화 수: {data?.pages[0]?.limit || 0}</span>
          </div>


          {/* 다음 페이지 수동 로드 버튼: fetchNextPage() 이게 useInfiniteQuery 훅의 다음 페이지를 호출하는 함수 */}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className={`px-2 py-1 ${hasNextPage ? 'bg-blue-500' : 'bg-gray-400'} text-white rounded-md text-xs`}>
              {isFetchingNextPage
                ? '로딩 중...'
                : hasNextPage
                  ? '더 보기'
                  : '더 이상 영화가 없습니다'}
            </button>
          </div>

          {/* 쿼리 캐시 무효화: invalidateQueries() 이게 useQueryClient의 캐시 무효화를 해주는 함수 */}
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

      {/* 영화 목록 그리드 - 상단 패딩 추가, movie.id에다가 index를 조합한 텍스트로 key를 만들어서 중복 방지 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {movies.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className="border rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <Link href={`/movies/${movie.id}`} className="block">
              <div className="relative h-80 w-full">
                <Image
                  src={movie.large_cover_image}
                  alt={movie.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* observerTarget 태그: 무한 스크롤 감지 영역. 옵져버타켓 ref은 리스트의 맨 밑에 놔야 무한 스크롤링이 가능하다. */}
      {hasNextPage && (
        <div
          ref={observerTarget}
          className="flex justify-center p-4"
        >
          {isFetchingNextPage && (
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          )}
        </div>
      )}

      {/* 모든 영화를 로드했을 때 표시할 메시지 */}
      {!hasNextPage && (
        <div className="text-center p-4 text-gray-500">
          모든 영화를 불러왔습니다.
        </div>
      )}
    </div>
  )
} 