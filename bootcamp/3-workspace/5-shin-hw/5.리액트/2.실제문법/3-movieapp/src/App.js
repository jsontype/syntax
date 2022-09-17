import React, { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList'
import Title from './Title'

export default function App() {
  const [movieList, setMovieList] = useState([])
  const [menu, setTitle] = useState(['무비리스트'])
  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res => res.json())
      .then(json => setMovieList(json.data.movies))
  }, [])

  return (
    <>
      <Title menu={menu}/>
      <MovieList movieList={movieList} />
    </>
  )
}
