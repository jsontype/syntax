import React from "react"
import { useQuery } from "@tanstack/react-query"
import "./Movies.css"

const fetchMovies = async () => {
  const res = await fetch(
    "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
  )
  return res.json()
}

function Movies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const movies = data.data.movies

  return (
    <div>
      <h1>무비 리스트</h1>
      {movies.map((item) => (
        <div key={item.id}>
          <a className="movieTitle" href={item.url}>
            {item.title}
          </a>
          <img
            className="movieImage"
            src={item.background_image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  )
}

export default Movies
