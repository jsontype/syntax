import { cookies, headers } from 'next/headers'
import MovieList from '@/components/MovieList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '영화 목록 | 무비앱',
  description: '다양한 영화를 확인해보세요.',
}

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// 영화 목록 데이터 페칭 함수
async function getMovies(sort: string, limit: string): Promise<Movie[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`,
      {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Connection': 'keep-alive'
        },
        // 중요: cache: 'no-store'로 설정하여 항상 새로운 데이터를 가져오게 합니다
        cache: 'no-store'
      }
    );

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API 요청 실패: ${res.status}`);
    }

    const data = await res.json();
    return data.data.movies;
  } catch (error) {
    console.error('영화 데이터 가져오기 오류:', error);
    return [];
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // URL의 쿼리 파라미터 추출
  const sort = typeof searchParams.sort === 'string' ? searchParams.sort : 'rating'
  const limit = typeof searchParams.limit === 'string' ? searchParams.limit : '20'

  // 헤더 정보 가져오기
  const headersList = headers()
  const headerUserAgent = headersList.get('user-agent') || '정보 없음'
  const headerLanguage = headersList.get('accept-language') || '정보 없음'
  const headerClientIp = headersList.get('x-forwarded-for') || '정보 없음'

  // 쿠키 정보 가져오기
  const cookieStore = cookies()
  const myToken = cookieStore.get('myToken')?.value || '토큰 없음'

  // 영화 데이터 가져오기
  const movies = await getMovies(sort, limit);

  return (
    <MovieList
      initialMovies={movies}
      headerUserAgent={headerUserAgent}
      headerLanguage={headerLanguage}
      headerClientIp={headerClientIp}
      myToken={myToken}
    />
  );
} 