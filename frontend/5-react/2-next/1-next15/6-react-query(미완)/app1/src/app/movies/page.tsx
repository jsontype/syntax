import Link from 'next/link'
import SetCookieButton from '@/app/components/SetCookieButton'
import SortPulldown from '@/app/components/SortPulldown'
import { headers, cookies } from 'next/headers'
import Image from 'next/image'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

// 서버 요청 함수
async function getData(sort: string = 'rating'): Promise<Movie[]> {
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sort}`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data.data.movies
}

type Props = {
  searchParams: {
    sort?: string
  }
}

export default async function SSR({ searchParams }: Props) {
  // 서버 컴포넌트에서 searchParams를 사용하려면 Props로 받아야 함.
  // Next15에서는 searchParams에 await가 필요함. (25/4/21 메모: VSCode는 업데이트가.. 불필요하다고 뜨지만 있어야함...)
  const sort = (await searchParams).sort || 'rating'

  const headersList = await headers()
  const cookiesList = await cookies()

  const headerUserAgent = headersList.get('user-agent') || '알 수 없음'
  const cookieMyToken = cookiesList.get('myToken')?.value || '토큰 없음'

  console.log('header / UserAgent: ', headerUserAgent)
  console.log('cookie / MyToken: ', cookieMyToken)

  const movies = await getData(sort)

  return (
    <div>
      <h1>SSR: 무비 리스트</h1>

      <SortPulldown />

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>
              <Link href={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </h2>
            <p>
              <Image src={movie.large_cover_image} alt={movie.title} width={500} height={300} />
            </p>
          </div>
        ))}
      </div>

      <SetCookieButton token="myToken" content="abcdefg!!!" />
    </div>
  )
}
