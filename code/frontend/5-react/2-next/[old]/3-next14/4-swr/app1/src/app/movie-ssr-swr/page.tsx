import MovieList from './MovieList/page'

const API_URL = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

// * 이 SSR 페이지의 존재 이유 : 일단 먼저 SSR 데이터를 빠르게 보여주고, 나중에 MovieList CSR 페이지에서 SWR을 사용하여 최신 데이터로 업데이트하는 것이 핵심.

// 🎯 서버에서 영화 데이터를 가져오는 함수
const fetchMovies = async () => {
  const res = await fetch(API_URL, { cache: 'no-store' }) // SSR을 위해 `no-store` 설정
  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }
  return res.json()
}

// 🎯 서버 컴포넌트: 초기 데이터 패칭 후 클라이언트 컴포넌트에 전달
export default async function Page() {
  const initialData = await fetchMovies()

  return <MovieList initialData={initialData} />
}
