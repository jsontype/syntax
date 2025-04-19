import Link from 'next/link'

type Movie = {
  id: number
  title: string
  url: string
  large_cover_image: string
}

// 서버 요청 함수
async function getData(): Promise<Movie[]> {
  const response = await fetch('https://yts.mx/api/v2/list_movies.json', {
    cache: 'force-cache', // ⬅️ NEXT15에서부터는 반드시 명시
  })
  const data = await response.json()
  return data.data.movies
}

export default async function SSG() {
  const movies = await getData()

  const render = movies.map((movie) => (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <p>
        <Link href={movie.url}>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
          />
        </Link>
      </p>
    </div>
  ))

  return (
    <div>
      <h1>SSG: 무비 리스트</h1>
      <div>{render}</div>
    </div>
  )
}
