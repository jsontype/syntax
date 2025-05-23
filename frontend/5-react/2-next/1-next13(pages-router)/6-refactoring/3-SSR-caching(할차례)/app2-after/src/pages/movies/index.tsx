import React, { useState } from 'react'
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
  initialMovies: Movie[]
  // searchParams(queryString): URL의 "?sort=rating&limit=20" 등에서 추출한 정보
  sort: string
  limit: number

  // pages-router에서는 header, cookie 정보를 getServerSideProps를 통해서 렌더링 함수 SSR에 props로 전달해야 한다.
  headerUserAgent: string
  headerLanguage: string
  headerClientIp: string
  myToken: string
  fallback: {
    [key: string]: Movie[]
  }
}

// 캐시 키 생성 함수
const generateCacheKey = (sort: string, limit: string) => {
  return `movies-${sort}-${limit}`;
}

// 메모리 캐시 객체 생성 (서버 사이드)
const CACHE_TTL = 60 * 5 * 1000; // 5분 캐시
const memoryCache: {
  [key: string]: {
    data: any;
    timestamp: number;
  }
} = {};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // ! TTFB(Time To First Byte) 개선을 위한 캐시 설정
  // ! TTFB: 브라우저가 요청을 보낸 후 서버로부터 첫 바이트를 받기까지 걸리는 시간으로 길면 길 수록 성능지표에 영향이 감
  context.res.setHeader(
    // ! 헤더 이름
    'Cache-Control',
    // ! 각 설정의 의미:
    // ! 1. public: 브라우저와 중간 캐시(CDN 등)가 모두 응답을 캐싱할 수 있음
    // ! 2. max-age=60: 브라우저가 60초 동안 응답을 캐시함
    // ! 3. s-maxage=300: CDN 같은 공유 캐시가 300초 동안 응답을 캐시함(브라우저 캐시보다 더 오래 유지)
    // ! 4. stale-while-revalidate=3600: 캐시가 만료된 후에도 3600초 동안 오래된 콘텐츠를 보여주면서 백그라운드에서 새로고침
    // ! 이 설정으로 반복 방문 시 서버 요청 없이 즉시 페이지를 표시하거나, 캐시가 만료되어도 백그라운드에서 갱신하면서 기존 콘텐츠를 보여줄 수 있음
    'public, max-age=60, s-maxage=300, stale-while-revalidate=3600'
  );

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

  // 캐시 키 생성
  const cacheKey = generateCacheKey(sort as string, limit as string);

  // 메모리 캐시 확인
  const now = Date.now();
  if (
    memoryCache[cacheKey] &&
    memoryCache[cacheKey].timestamp + CACHE_TTL > now
  ) {
    return {
      props: {
        initialMovies: memoryCache[cacheKey].data,
        sort: sort as string,
        limit: Number(limit),
        headerUserAgent,
        headerLanguage,
        headerClientIp: headerClientIp as string,
        myToken,
        fallback: {
          [cacheKey]: memoryCache[cacheKey].data
        }
      }
    };
  }

  // ! try/catch 블록의 필요성:
  // ! 성능 최적화: API 지연이 전체 렌더링을 막지 않도록 하여 TTFB와 LCP 개선에 기여
  // !    - 문제 설명: 외부 API 요청이 느리거나 타임아웃될 경우, SSR(서버 사이드 렌더링)은 응답을 기다리며 차단됨
  // !    - Next.js는 getServerSideProps 함수가 완료될 때까지 HTML을 클라이언트에 전송하지 않음
  // !    - 이로 인해 TTFB(Time To First Byte)가 크게 증가하고 사용자는 빈 화면을 오래 보게 됨
  // !    - 시간 제한이 없는 fetch는 30초 이상 응답을 기다릴 수 있어 성능에 치명적
  // !    - try/catch + AbortController 조합이 이 문제를 해결:
  // !        a) AbortController는 2.5초 후 요청을 중단하여 무한 대기 방지
  // !        b) catch 블록은 실패 시 빈 배열을 반환하여 렌더링 차단 방지
  // !        c) 결과적으로 API가 느려도 최대 2.5초만 기다린 후 진행
  // !    - 실제 효과: TTFB가 최대 30초 → 최대 2.5초로 감소, LCP도 그에 비례하여 개선됨
  // !    - 이는 웹 성능 점수(Core Web Vitals)와 SEO에도 긍정적 영향을 미침
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500); // 타임아웃 감소

    // ! fetch 함수: SortPulldown 컴포넌트에서 선택된 풀다운을 적용
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`,
      {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'max-age=300',
          'Connection': 'keep-alive'
        },
        next: {
          revalidate: 300
        }
      }
    );

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API 요청 실패: ${res.status}`);
    }

    const data = await res.json();
    const movies = data.data.movies;

    // 결과를 메모리 캐시에 저장
    memoryCache[cacheKey] = {
      data: movies,
      timestamp: now
    };

    return {
      props: {
        initialMovies: movies,
        sort: sort as string,
        limit: Number(limit),
        headerUserAgent,
        headerLanguage,
        headerClientIp: headerClientIp as string,
        myToken,
        fallback: {
          [cacheKey]: movies
        }
      }
    };
  } catch (error) {
    console.error('영화 데이터 가져오기 오류:', error);
    return {
      props: {
        initialMovies: [],
        sort: sort as string,
        limit: Number(limit),
        // pages-router에서는 header, cookie 정보를 getServerSideProps를 통해서 렌더링 함수 SSR에 props로 전달해야 한다.
        headerUserAgent,
        headerLanguage,
        headerClientIp: headerClientIp as string,
        myToken,
        fallback: {}
      }
    };
  }
}

export default function Movies({ initialMovies, sort, limit, headerUserAgent,
  headerLanguage,
  headerClientIp,
  myToken,
}: Props) {
  // 클라이언트 사이드에서 상태 관리
  const [movies] = useState<Movie[]>(initialMovies);

  // pages-router에서는 렌더링 함수에 cookie, header를 쓰기 위해서는 getServerSideProps 험수에 리턴 값으로 담아서 보내고, props로 받아서 가져와서 써야한다.
  console.log('headerUserAgent: ', headerUserAgent)
  console.log('headerLanguage: ', headerLanguage)
  console.log('headerClientIp: ', headerClientIp)
  // console.log('headerAuthToken: ', headerAuthToken)
  console.log('myToken:', myToken)

  // ! 바로 보이는 이미지는 즉시 랜더링 될 수 있게 조건을 넣기위한 index를 추가
  const render = movies.map((movie, index) => (
    <div key={movie.id} style={{
      // ! Render Delay 개선을 위한 최소 스타일 추가
      contain: 'content',
      position: 'relative'
    }}>
      <h2>
        <Link href={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      </h2>
      <p style={{
        // 이미지 컨테이너 최적화
        margin: 0,
        // ! css트릭, translateZ(0)으로 첫 두 이미지만 GPU 가속하여 렌더링 속도 향상
        transform: index < 2 ? 'translateZ(0)' : 'none'
      }}>
        <Image
          src={movie.large_cover_image}
          alt={movie.title}
          width={500}
          height={750}
          // ! priority 속성은 이미지의 로딩 우선순위를 높여 페이지 로드 시 가장 먼저 다운로드.
          // ! 1. LCP(Largest Contentful Paint) 최적화에 중요한 역할을 함.
          // ! 2. 첫 화면에 보이는 중요 이미지에만 사용해야 함(남용하면 성능이 저하됨).
          priority={index < 2}
          // ! loading 속성은 이미지 로딩 방식을 제어합니다.
          // ! 1. "eager": 페이지 로드 시 즉시 이미지를 로드합니다(화면 밖에 있어도 로드).
          // ! 2. "lazy": 뷰포트에 가까워질 때만 이미지를 로드합니다(기본값).
          loading={index < 2 ? "eager" : "lazy"}
          // ! 첫 2개는 고품질, 나머지는 조금 저품질로 표시
          quality={index < 2 ? 90 : 80}
          // ! 이미지 로딩 중 흐릿한 플레이스홀더 표시
          placeholder="blur"
          // ! blurDataURL 이미지가 로딩되기 전에 보여줄 임시 이미지입니다.
          // ! 1. Base64로 인코딩된 SVG 형식의 간단한 회색 사각형입니다.
          // ! 2. 실제 이미지가 로딩되는 동안 자리를 잡아 레이아웃 이동을 방지합니다.
          // ! 3. 레이아웃 안정성: CLS(Cumulative Layout Shift) 감소로 전체 사용자 경험이 향상됨
          // ! 4. 실제 LCP 개선을 위해서는 priority={true} 속성과 같이 써야함
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNzUwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzMzMzIi8+PC9zdmc+"
          sizes="(max-width: 768px) 100vw, 500px"
          style={{
            objectFit: 'cover',
            maxWidth: '100%',
            height: 'auto'
          }}
          onLoadingComplete={(img) => {
            // ! 이미지 로드 완료 후 성능 향상을 위한 작업
            if (index < 2) {
              // 동기적 디코딩은 첫 번째 이미지에만 적용
              img.decoding = index < 1 ? 'sync' : 'async';
            }
          }}
        />
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
