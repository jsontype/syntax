// export const dynamic = 'force-dynamic' // 선택사항: 명시적으로 SSR 선언하는 용도
import Image from 'next/image'

type Movie = {
  id: number
  title: string
  url: string
  background_image: string
}

async function getData(): Promise<Movie[]> {
  const res = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating', {
    cache: 'no-store' // SSR 시 필수 : 캐시를 아예 저장하지 않겠다는 의미. 즉, 매 페이지 요청마다 API를 다시 호출함. 동적 fetch.
  })
  const json = await res.json()
  return json.data.movies
}

export default async function SSR() {
  const movies = await getData()

  return (
    <div>
      <h1>SSR: 무비 리스트</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <a href={movie.url}>{movie.title}</a>
          <Image src={movie.background_image} alt={movie.title} width={300} height={125} />
        </div>
      ))}
    </div>
  )
}
