/** @type {import('next').NextConfig} */
const nextConfig = {
  // React의 엄격 모드 비활성화 - 개발 중 잠재적 문제를 찾아내고 안전하지 않은 생명주기를 사용하는 컴포넌트 식별 (개발 모드에서만 적용)
  reactStrictMode: false,
  // 최적화: 이미지 최적화 관련 설정
  // ! 최적화(이미지): 이미지 파일 크기를 줄여 데이터 전송량을 감소시킴.
  // 이미지 로딩 속도 개선, 데이터 전송량 감소로 비용도 절감
  images: {
    // 외부 이미지를 허용할 도메인 목록
    domains: ["yts.mx", "img.yts.mx"],
    // ! (이미지에서 가장 중요) 이미지 최적화시 생성할 포맷 (avif는 최신 압축 형식으로 파일 크기가 작음). 가장 극적으로 파일 크기를 줄여줌.
    formats: ["image/avif", "image/webp"],
    // 최적화된 이미지의 최소 캐시 시간 (초 단위, 여기서는 1시간)
    minimumCacheTTL: 3600,
    // 반응형 이미지 생성시 기준이 되는 디바이스 너비 (픽셀)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // 더 작은 이미지용 크기 목록 (아이콘, 썸네일 등)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // ! 최적화(정적자산 + API): HTTP 캐시 헤더 설정 - 브라우저와 CDN이 콘텐츠를 캐싱하는 방법 지정
  // 성능 향상: 서버가 매번 같은 자원을 다시 생성하거나 전송하는 것을 방지하여 TTFB(Time To First Byte)를 크게 개선함
  // 서버 부하 감소: 반복적인 요청을 캐시에서 처리하여 서버 자원을 절약하고 응답 속도 향상
  // 사용자 경험 개선: 이미 방문한 페이지나 자원을 빠르게 로드하여 체감 속도 향상.
  // 정적 자산(JS, CSS, 이미지)은 길게, API 응답은 짧게 캐싱하여 최적의 균형 유지
  async headers() {
    return [
      {
        // 모든 정적 자산 경로 대상
        source: "/:path*",
        headers: [
          {
            // no-store 대신 더 효과적인 캐싱 전략 사용 (back/forward 캐시 지원: 브라우저의 뒤로가기/앞으로가기 기능 사용 시 새로운 요청을 하지 않고 캐시된 데이터를 사용)
            key: "Cache-Control",
            // 정적 자산은 길게 캐싱: 1년간 캐싱, 변경되지 않음 표시 (CSS, JS, 이미지 등 정적 파일 최적화)
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // API 경로 대상
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            // API 응답은 짧게 캐싱: 60초 동안 캐시 유효, 추가 30초는 백그라운드에서 갱신하며 캐시 제공
            value: "public, max-age=60, stale-while-revalidate=30",
          },
        ],
      },
      {
        // back/forward 캐시를 위한 명시적인 캐시 헤더 추가
        source: "/movies",
        headers: [
          {
            // no-store 제거, bfcache 지원을 위한 캐시 설정
            key: "Cache-Control",
            // API 응답은 짧게 캐싱: 60초 동안 캐시 유효, 추가 30초는 백그라운드에서 갱신하며 캐시 제공
            value: "public, max-age=30, stale-while-revalidate=60",
          },
        ],
      },
    ]
  },

  // ! 최적화(정적자산): 정적 자산 최적화 관련 컴파일러 설정
  // 콘솔로그 등 불필요 코드 삭제로 번들 크기 감소, 로딩 속도 향상.
  compiler: {
    // 프로덕션 모드에서는 console.log 등의 디버깅 코드 제거
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ! 최적화(JS): JavaScript 코드 최소화 설정 - 더 강력한 최적화
  // SWC 기반 코드 압축 활성화 (Next.js 13+ 기본값은 true이지만 명시적으로 설정)
  swcMinify: true,

  // ! 보안(API): 'X-Powered-By: Next.js' HTTP 헤더 제거
  // 서버 API 정보 노출을 방지하여 공격 표면 감소
  poweredByHeader: false,

  // ! 최적화(웹소켓): 서버 사이드 웹소켓 최적화 (back/forward 캐시 문제 해결)
  // scrollRestoration 옵션만 유지 (지원되는 옵션만 사용)
  experimental: {
    scrollRestoration: true, // 스크롤 위치 복원 기능 활성화 (사용자 경험 향상)
  },
}

module.exports = nextConfig
