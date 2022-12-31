import React, { useState, useEffect } from 'react'
import './App.css'
import Title from './Components/Title'
import MovieList from './Components/MovieList'

const App: React.FC = () => {
  // JS
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    // fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(json => { setMovies(json.data.movies) })
  }, [])
  // console.log(movies)

  return (
    <div className="App">
      <Title />
      <MovieList movies={movies} />
    </div>
  )
}

export default App