import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import * as cookie from 'cookie'
import SetCookieButton from '../../components/SetCookieButton'
import SortPulldown from '../../components/SortPulldown'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

type Props = {
  movies: Movie[]
  // searchParams(queryString): URL의 "?sort=rating&limit=20" 등에서 추출한 정보
  sort: string
  limit: number
  // pages-router에서는 header, cookie 정보를 getServerSideProps를 통해서 렌더링 함수 SSR에 props로 전달해야 한다.
  headerUserAgent: string
  headerLanguage: string
  headerClientIp: string
  myToken: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // ! context: getServerSideProps에서 context 파라미터가 자동 적용됨. 그 안에, header, cookie, params, searchParams 등 정보들이 있다.
  // ! context.req.headers['header명'] : 서버 요청 헤더 정보. 사용자 요청에 대한 정보를 알 수 있음.

  // ! user-agent: 브라우저/디바이스 식별. 모바일/데스크탑 분기 렌더링할 때 사용.
  const headerUserAgent = context.req.headers['user-agent'] || '정보 없음'
  // ! accept-language : 사용자 언어. 다국어(i18n) 초기 로케일 설정 볼 때 사용.
  const headerLanguage = context.req.headers['accept-language'] || '정보 없음'
  // ! x-forwarded-for 또는 x-real-ip : 클라이언트 IP. 사용자 위치 기반 기능(Geo, IP 로그)을 만들 때 사용.
  let headerClientIp = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress || '정보 없음'
  if (Array.isArray(headerClientIp)) {
    headerClientIp = headerClientIp.join(', ')
  }
  // ! authorization : 토큰 인증 (API 전용). JWT 등 인증된 요청 판별할 때 사용.
  // const headerAuthToken = context.req.headers['authorization'] || '토큰 없음'



  // ! cookie.parse : 서버 쿠키 정보. pages-router에서는 next/header 기능이 없으므로, cookie 라이브러리의 설치가 필요하다. 쿠키는 웹앱에서 로컬 파일로 강제 저장시키는 정보이다.
  const cookiesList = context.req.headers.cookie ? cookie.parse(context.req.headers.cookie) : {}

  // ! myToken: 사용자 인증 토큰. 사용자가 로그인할 때, 서버에서 발급하는 고유한 토큰.
  // 쿠키는 내 컴퓨터에서 조작이 가능하므로, 인증에 쓰는 것은 위험하다. 그래서, "보안상 중요하지 않은 것"에 사용. 
  // 예를 들면 게시판으로 치면 조회수 제어 같은 것.
  // -> 게시판에 있는 게시물 중 특정 게시물을 봤는지 안봤는지 get(`bbs-${id}`) 같은 쿠키를 이용해 체크해서,
  // -> 내가 게시글을 읽은 게시물은 다시 접속해도 조회수가 안 늘어나게 함.
  const myToken: string = cookiesList['myToken'] || '토큰 없음'



  // ! context.query: 클라이언트에서 서버로 전달된 searchParams 파라미터 정보. 기본값 있음.
  const { sort = 'rating', limit = '20' } = context.query

  // ! fetch 함수: SortPulldown 컴포넌트에서 선택된 풀다운을 적용
  const res = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`)
  const data = await res.json()



  return {
    props: {
      movies: data.data.movies,
      sort: sort as string,
      limit: Number(limit),
      // pages-router에서는 header, cookie 정보를 getServerSideProps를 통해서 렌더링 함수 SSR에 props로 전달해야 한다.
      headerUserAgent,
      headerLanguage,
      headerClientIp: headerClientIp as string,
      myToken,
    }
  }
}

export default function Movies({ movies, sort, limit, headerUserAgent,
  headerLanguage,
  headerClientIp,
  myToken,
}: Props) {
  // pages-router에서는 렌더링 함수에 cookie, header를 쓰기 위해서는 getServerSideProps 험수에 리턴 값으로 담아서 보내고, props로 받아서 가져와서 써야한다.
  console.log('headerUserAgent: ', headerUserAgent)
  console.log('headerLanguage: ', headerLanguage)
  console.log('headerClientIp: ', headerClientIp)
  // console.log('headerAuthToken: ', headerAuthToken)
  console.log('myToken:', myToken)

  const render = movies.map((movie) => (
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
  ))

  return (
    <div>
      <div className="flex justify-between">
        <h1>무비 리스트</h1>
        <SortPulldown />
      </div>
      <div>{render}</div>
      <SetCookieButton token="myToken" content="11111!!!" />
    </div>
  )
}
