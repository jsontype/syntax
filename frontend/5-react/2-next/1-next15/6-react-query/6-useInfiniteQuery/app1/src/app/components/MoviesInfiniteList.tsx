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

type Props = {
  searchParams: {
    sort: string
    limit: number
  }
}

export default function MoviesInfiniteList({ searchParams }: Props) {
  const queryClient = useQueryClient()
  // 무한 스크롤에서, 더 이상 불러올 영화가 없으면 false로 설정
  const [hasNextPage, setHasNextPage] = useState(true)
  // 무한 스크롤 감지 영역 참조 - IntersectionObserver에서 사용
  const observerTarget = useRef<HTMLDivElement>(null)

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    error,
    status
  } = useInfiniteQuery({
    // useInfiniteQuery도 쿼리키를 사용합니다. 쿼리키는 캐싱 및 무효화에 중요합니다.
    queryKey: ['movies', 'infinite', searchParams.sort, searchParams.limit],
    queryFn: ({ pageParam }) => getData(searchParams.sort, pageParam, searchParams.limit),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // 더 이상 불러올 영화가 없으면 undefined 반환 (무한 스크롤 중지)
      const fetchedMoviesCount = allPages.reduce((total, page) => total + page.movies.length, 0)
      const totalMovieCount = lastPage.movie_count

      // 더 이상 불러올 영화가 없으면 false로 설정
      if (fetchedMoviesCount >= totalMovieCount) {
        setHasNextPage(false)
        return undefined
      }

      return lastPage.page_number + 1
    },
  })

  // 인터섹션 옵저버를 사용하여 무한 스크롤 구현
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 0.5 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

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


          {/* 다음 페이지 수동 로드 버튼 */}
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

          {/* 쿼리 캐시 무효화 */}
          <div>
            <button
              onClick={() => queryClient.invalidateQueries({ queryKey: ['movies', 'infinite', searchParams.sort, searchParams.limit] })}
              className="px-2 py-1 bg-purple-500 text-white rounded-md text-xs">
              강제 갱신 (Invalidate)
            </button>
          </div>
        </div>
      </div>

      {/* 영화 목록 그리드 - 상단 패딩 추가 */}
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

      {/* 무한 스크롤 감지 영역 */}
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