import React, { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList'

export default function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res => res.json())
      .then(json => setMovieList(json.data.movies))
  }, [])

  return (
    <>
      <h1>무비 앱</h1>
      <MovieList movieList={movieList} />
    </>
  )
}
