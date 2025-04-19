import Link from 'next/link'
import SetCookieButton from '@/app/components/setCookieButton'
import { headers, cookies } from 'next/headers'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// 서버 요청 함수
async function getData(): Promise<Movie[]> {
  const response = await fetch('https://yts.mx/api/v2/list_movies.json', {
    cache: 'no-store', // 'force-cache'는 캐싱된 데이터 사용 (SSG용, Next13에서의 기본값), 'no-store'는 페이지를 열 때마다 매번 새로 요청 (SSR용)
  })
  const data = await response.json()
  return data.data.movies
}

export default async function SSR() {
  // Next 15에서, headers, cookies를 가져올 때 반드시 async 서버 컴포넌트안에서, await를 붙여야 함. 

  // ! headers() : 서버 요청 헤더 정보. 사용자 요청에 대한 정보를 알 수 있음.
  const headersList = await headers()

  // ! user-agent: 브라우저/디바이스 식별. 모바일/데스크탑 분기 렌더링할 때 사용.
  const headerUserAgent = headersList.get('user-agent') || '알 수 없음'
  // ! accept-language : 사용자 언어. 다국어(i18n) 초기 로케일 설정 볼 때 사용.
  // const headerLanguage = headersList.get('accept-language') || '언어 정보 없음'
  // ! x-forwarded-for 또는 x-real-ip : 클라이언트 IP. 사용자 위치 기반 기능(Geo, IP 로그)을 만들 때 사용.
  // const headerClientIp = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'IP 정보 없음'
  // ! authorization : 토큰 인증 (API 전용). JWT 등 인증된 요청 판별할 때 사용.
  // const headerAuthToken = headersList.get('authorization') || '토큰 없음'

  console.log('headerUserAgent: ', headerUserAgent)
  // console.log('headerLanguage: ', headerLanguage)
  // console.log('headerClientIp: ', headerClientIp)
  // console.log('headerAuthToken: ', headerAuthToken)



  // ! cookies() : 서버 쿠키 정보. 쿠키는 웹앱에서 로컬 파일로 강제 저장시키는 정보이다.
  const cookiesList = await cookies()

  // ! myToken: 사용자 인증 토큰. 사용자가 로그인할 때, 서버에서 발급하는 고유한 토큰. 사용자의 인증 상태를 유지하기 위해 사용.
  const myToken = cookiesList.get('myToken')?.value || '토큰 없음'

  console.log('myToken:', myToken)





  const movies = await getData()

  console.log('movies: ', movies)

  const render = movies.map((movie) => (
    <div key={movie.id}>
      <h2>
        <Link href={`/movies/${movie.id}`}>
          {movie.title}</Link></h2>
      <p>
        <img
          src={movie.large_cover_image}
          alt={movie.title}
        />
      </p>
    </div>
  ))

  return (
    <div>
      <h1>SSR: 무비 리스트</h1>
      <div>{render}</div>
      <SetCookieButton token="myToken" content="abcdefg!!!" />
    </div>
  )
}
