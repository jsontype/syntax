import React, { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/movie/MovieList'


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((res) => { return res.json() })
      .then((json) => { setMovies(json.data.movies) })
  }, [])

  console.log('movies: ', movies)

  return (
    <div className="App">
      <h1 className='appTitle'>무비 리스트</h1>
      <MovieList movies={movies} />      
    </div>
  )
}

export default App
