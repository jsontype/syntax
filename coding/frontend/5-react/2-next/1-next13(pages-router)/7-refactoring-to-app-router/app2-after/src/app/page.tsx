import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '무비앱',
  description: '이곳은 내 홈페이지입니다. 최신 정보와 서비스를 확인하세요.',
  openGraph: {
    title: '홈 | 내 사이트 이름',
    description: '이곳은 내 홈페이지입니다. 최신 정보와 서비스를 확인하세요.',
    type: 'website',
    url: 'https://www.example.com/',
    images: [
      {
        url: 'https://www.example.com/og-image.jpg',
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="https://img.yts.mx/assets/images/movies/captain_america_brave_new_world_2025/background.jpg"
        alt="배경 이미지"
        fill
        sizes="600"
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute top-1/2 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2">
        <div className="my-6 text-center">
          <Link href="/movies">
            🎬 영화 보러가기
          </Link>
        </div>
        <div className="my-10 text-center text-black">
          <form action="/api/login" method="POST">
            <div className="my-4">
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
            </div>
            <button className="bg-green-700 text-white mt-5 px-4 py-2 rounded hover:bg-green-800">
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 