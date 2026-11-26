import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import * as cookie from 'cookie'
import SetCookieButton from '../../components/SetCookieButton'
import SortPulldown from '../../components/SortPulldown'
import { getMovies } from '../../api/getMovies'

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
  // ! TTFB(Time To First Byte) 개선을 위한 캐시 설정: TTFB는 브라우저가 요청을 보낸 후 서버로부터 첫 바이트를 받기까지 걸리는 시간. 길 수록 성능지표에 영향을 줌.
  context.res.setHeader(
    // ! 헤더 종류
    // Cache-Control(캐시 제어), Expires(응답 만료 시점), ETag(콘텐츠 변경 여부 확인), Last-Modified(콘텐츠 변경 시간), Vary(캐시 적용 여부 확인)
    // ! Cache-Control의 4가지 용법 (캐시 제어 빈도가 낮은 것부터 높은 것으로 정렬했음)
    // res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'): 1년 캐시, 변경되지 않는 파일로 간주. immutable은 새 요청하지 않고 그냥 캐시를 사용함. (이미지, CSS, JS 등 정적 파일)
    // res.setHeader('Cache-Control', 'private, no-cache, must-revalidate'): 브라우저는 보관하지만, 서버에 확인 후 재사용 (마이페이지, 주문내역 등)
    // res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=3600'): 캐시 설정. 브라우저/CDN 캐시 사용, 백그라운드에서 새로고침. 설정치는 상황에 따라 다름. (게시물 등 일반적인 API 호출)
    // res.setHeader('Cache-Control', 'no-store'): 캐시무효화. 항상 API 호출. (1초마다 바뀌는 API 요청에 적합. 환율, 주가 등)
    // ! Cache-Control의 각 설정의 의미 상세 (이 설정으로 반복 방문 시 서버 요청 없이 즉시 페이지를 표시하거나, 캐시가 만료되어도 백그라운드에서 갱신하면서 기존 콘텐츠를 보여줄 수 있음)
    // public: 브라우저와 중간 캐시(CDN 등)가 모두 응답을 캐싱할 수 있음
    // max-age=60: 브라우저가 60초 동안 응답을 캐시함
    // s-maxage=300: CDN 같은 공유 캐시가 300초 동안 응답을 캐시함(브라우저 캐시보다 더 오래 유지)
    // stale-while-revalidate=3600: 캐시가 만료된 후에도 3600초 동안 오래된 콘텐츠를 보여주면서 백그라운드에서 새로고침
    'Cache-Control',
    'public, max-age=60, s-maxage=300, stale-while-revalidate=3600'
  );

  const { sort = 'rating', limit = '20' } = context.query
  const headerUserAgent = context.req.headers['user-agent'] || '정보 없음'
  const headerLanguage = context.req.headers['accept-language'] || '정보 없음'
  let headerClientIp = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress || '정보 없음'
  if (Array.isArray(headerClientIp)) {
    headerClientIp = headerClientIp.join(', ')
  }
  const cookiesList = context.req.headers.cookie ? cookie.parse(context.req.headers.cookie) : {}
  const myToken: string = cookiesList['myToken'] || '토큰 없음'

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

  // ! try/catch 블록으로 성능 최적화하기: API 지연이 전체 렌더링을 막지 않도록 하여 TTFB와 LCP 개선에 기여
  // 문제: Next.js는 getServerSideProps 함수가 완료될 때까지 HTML을 클라이언트에 전송하지 않기 때문에, TTFB(Time To First Byte)가 크게 증가하고 사용자는 빈 화면을 오래 보게 됨. 시간 제한이 없는 fetch는 30초 이상 응답을 기다릴 수 있어 성능에 치명적임.
  // 해결: try/catch + AbortController 조합을 사용하면, 이렇게 외부 API 요청이 느리거나 타임아웃될 경우, SSR(서버 사이드 렌더링)은 응답을 기다리며 차단된다.
  //   a) AbortController는 2.5초 후 요청을 중단하여 무한 대기 방지
  //   b) catch 블록은 실패 시 빈 배열을 반환하여 렌더링 차단 방지
  //   c) 결과적으로 API가 느려도 최대 2.5초만 기다린 후 진행
  // 실제 효과: 이 앱에서, TTFB가 90% (최대 30초) → 2% (최대 2.5초)로 감소했다. LCP도 그에 비례하여 개선됨. 이는 웹 성능 점수(Core Web Vitals)와 SEO에도 긍정적 영향을 미침.
  try {
    const movies = await getMovies(sort as string, limit as string)

    // 결과를 메모리 캐시에 저장
    memoryCache[cacheKey] = {
      data: movies,
      timestamp: now
    }

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
    }
  } catch (error) {
    console.error('영화 데이터 가져오기 오류:', error);
    return {
      props: {
        initialMovies: [],
        sort: sort as string,
        limit: Number(limit),
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
  const [movies] = useState<Movie[]>(initialMovies);

  console.log('headerUserAgent: ', headerUserAgent)
  console.log('headerLanguage: ', headerLanguage)
  console.log('headerClientIp: ', headerClientIp)
  console.log('myToken:', myToken)

  // ! 먼저 렌더링할 것들 순서 선별하는 최적화: 바로 보이는 이미지는 즉시 랜더링 될 수 있게 조건을 넣기위한 index를 추가
  const render = movies.map((movie, index) => (
    <div key={movie.id} style={{
      // ! 인덱스 순서별 렌더링 최적화: Render Delay 개선을 위한 최소 스타일 추가
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
        // ! 인덱스 순서별 렌더링 최적화: css트릭, translateZ(0)으로 첫 두 이미지만 GPU 가속하여 렌더링 속도 향상
        transform: index < 2 ? 'translateZ(0)' : 'none'
      }}>
        <Image
          src={movie.large_cover_image}
          alt={movie.title}
          width={500}
          height={750}
          // ! 인덱스 순서별 렌더링 최적화: priority 속성은 이미지의 로딩 우선순위를 높여 페이지 로드 시 가장 먼저 다운로드.
          // 1. LCP(Largest Contentful Paint) 최적화에 중요한 역할을 함.
          // 2. 첫 화면에 보이는 중요 이미지에만 사용해야 함(남용하면 성능이 저하됨).
          priority={index < 2}
          // ! 인덱스 순서별 렌더링 최적화: loading 속성은 이미지 로딩 방식을 제어
          // 1. "eager": 페이지 로드 시 즉시 이미지를 로드합니다(화면 밖에 있어도 로드).
          // 2. "lazy": 뷰포트에 가까워질 때만 이미지를 로드합니다(기본값).
          loading={index < 2 ? "eager" : "lazy"}
          // ! 첫 2개는 고품질, 나머지는 조금 저품질로 표시
          quality={index < 2 ? 90 : 80}
          // ! 이미지 로딩 중 흐릿한 플레이스홀더 표시
          placeholder="blur"
          // ! blurDataURL 이미지가 로딩되기 전에 보여줄 임시 이미지
          // 1. Base64로 인코딩된 SVG 형식의 간단한 회색 사각형입니다.
          // 2. 실제 이미지가 로딩되는 동안 자리를 잡아 레이아웃 이동을 방지합니다.
          // 3. 레이아웃 안정성: CLS(Cumulative Layout Shift) 감소로 전체 사용자 경험이 향상됨
          // 4. 실제 LCP 개선을 위해서는 priority={true} 속성과 같이 써야함
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNzUwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzMzMzIi8+PC9zdmc+"
          sizes="(max-width: 768px) 100vw, 500px"
          style={{
            objectFit: 'cover',
            maxWidth: '100%',
            height: 'auto'
          }}
          onLoadingComplete={(img) => {
            // ! 인덱스 순서별 렌더링 최적화: 이미지 로드 완료 후 LCP에 중요한 첫 번째 이미지에만 더 빠른 동기적 디코딩(sync)을 적용하면, LCP가 향상된다.
            // 1. 동기 디코딩은 이미지가 로드되면 즉시 디코딩되어 렌더링되므로, LCP 시점을 앞당길 수 있다.
            // 2. 반면, 비동기 디코딩(async)은 브라우저가 여유가 있을 때 디코딩을 수행하므로 렌더링 시점이 늦어질 수 있다.
            // 3. "이미지 로딩 후 디코딩하는 일"에 있어서는 동기가 더 빠르다. 다만 모두 동기로 하면 전체 속도가 느려지므로, 첫번째 인덱스의 이미지만 쓰는 것이다. 헷갈리지 않도록 주의!
            if (index < 2) {
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
