import React, { useState, useEffect } from "react"
import MovieList from "components/MovieList"

export default function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  console.log(movies)

  return (
    <div className="App">
      <h1>무비 앱</h1>
      <MovieList movies={movies} />
    </div>
  )
}
