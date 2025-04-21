import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* 
        Head: 'next/head'에서 임포트하는 Next.js의 내장 컴포넌트로, 페이지의 메타데이터를 설정하는 데 사용된다.
        메타데이터는 유저 눈에 보이지는 않지만 SEO 최적화, SNS 공유 미리보기, 페이지 제목 등을 설정하는 데 유용하다.
        예: <title>, <meta> 태그 등을 삽입하여 SEO 및 SNS 공유 미리보기 최적화에 활용 가능
      */}
      <Head>
        <title>무비앱</title>
        <meta name="description" content="이곳은 내 홈페이지입니다. 최신 정보와 서비스를 확인하세요." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="홈 | 내 사이트 이름" />
        <meta property="og:description" content="이곳은 내 홈페이지입니다. 최신 정보와 서비스를 확인하세요." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta property="og:image" content="https://www.example.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 
        CSS의 position 속성
          - relative: 부모 요소가 기준이 되어 자식의 absolute 위치를 조정 
          - absolute + transform: 텍스트 위치 정렬
      */}
      <div className="relative w-full h-[600px]">
        {/* Image */}
        <Image
          src="https://img.yts.mx/assets/images/movies/captain_america_brave_new_world_2025/background.jpg"
          alt="배경 이미지"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute top-1/2 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2">
          {/* Link */}
          <div className="my-6 text-center">
            <Link href="/movies">
              🎬 영화 보러가기
            </Link>
          </div>

          {/* form: pages router 방식에서는 <Form>을, app router 방식에서는 <form> 사용. api/login.ts에 action 험수를 만들면 연결 가능. */}
          <div className="my-10 text-center">
            <form action="/api/login" method="POST">
              <input
                type="text"
                name="username"
                placeholder="아이디"
                className="border p-2 mr-2"
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                className="border p-2 mr-2"
              />
              <button type="submit" className="mt-10 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
