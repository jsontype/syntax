import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // 캐싱 설정 추가 (10분 동안 캐싱)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=59'
  )

  try {
    // fetch 요청에 옵션 추가 (타임아웃, 헤더 등)
    const response = await fetch('https://yts.mx/api/v2/list_movies.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 5000, // 5초 타임아웃 설정
    });

    if (!response.ok) {
      throw new Error(`API 응답 오류: ${response.status}`);
    }

    const data = await response.json();
    return {
      props: {
        movies: data.data.movies
      }
    };
  } catch (error) {
    console.error('데이터 가져오기 오류:', error);
    // 오류 발생 시 빈 배열 반환
    return {
      props: {
        movies: []
      }
    };
  }
}

export default function Home({ movies }: { movies: Movie[] }) {
  return (
    <div>
      <h1>무비 리스트</h1>
      <div>
        {movies.map((movie) => (
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
        ))}
      </div>
    </div>
  )
}
