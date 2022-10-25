import React, { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import TitleList from './components/TitleList'
import Counter from './components/Counter'

export default function App () {
  // JS
  const [movies, setMovies] = useState([])
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => {
    setIsCounter(!isCounter)
  }

  // 라이프사이클 구현 : useEffect(실행할 함수, Deps 배열)
  useEffect(() => {
    // fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(json => setMovies(json.data.movies))
  }, [])

  // XML
  return (
    <div className='App'>
      <button onClick={onClick}>스위치</button>
      { isCounter && <Counter /> }
      
      <TitleList />
      <MovieList movies={movies} />
    </div>
  )
}
