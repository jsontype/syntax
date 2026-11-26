import { useEffect, useState } from "react"

type Movie = {
  id: number
  title: string
  url: string
  background_image: string
}

export default function CSR() {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    setIsLoading(true)
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>CSR: 무비 리스트</h1>
      {isLoading
        ? <div>Loading...</div>
        : movies.map((movie) => (
          <div key={movie.id}>
            <a href={movie.url}>{movie.title}</a>
            <img src={movie.background_image} alt={movie.title} width="300" />
          </div>
        ))}
    </div>
  )
}
