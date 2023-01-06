import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'

export default function App () {
  // JS
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch('https://yts.mx/api/v2/list_movies.json')
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(res => res.json())
      .then(json => { setMovies(json.data.movies) })
  }, [])

  console.log(movies)

  // XML
  return (
    <div className="App">
      <h1>무비 리스트</h1>
      <MovieList movies={movies} />
    </div>
  )
}
