// export const dynamic = 'force-static' // 선택사항: 명시적으로 SSG 선언하는 용도

type Movie = {
  id: number
  title: string
  url: string
  background_image: string
}

async function getData(): Promise<Movie[]> {
  const res = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating') // SSG 시 cache: 'force-cache' 기본값
  const json = await res.json()
  return json.data.movies
}

export default async function SSG() {
  const movies = await getData()

  return (
    <div>
      <h1>SSG: 무비 리스트</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <a href={movie.url}>{movie.title}</a>
          <img src={movie.background_image} alt={movie.title} width={300} />
        </div>
      ))}
    </div>
  )
}
