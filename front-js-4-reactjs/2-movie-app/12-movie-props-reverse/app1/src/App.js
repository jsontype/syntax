import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'
import MovieForm from "./components/MovieForm"

function App() {
  const [movies, setMovies] = useState([
    { title: 'movie1', year: 2011 },
    { title: 'movie2', year: 2012 },
    { title: 'movie3', year: 2013 },
    { title: 'movie4', year: 2014 },
    { title: 'movie5', year: 2015 },
  ])
  
  useEffect(() => {
      console.log('render')
  })

  const render = movies.map((movie) => {
    return (
      <Movie movie={movie} key={movie.title} />
    )
  })

  const addMovie = (movie) => {    
    setMovies([
      ...movies,
      movie
    ])
  }

  return (
    <div className='App'>
      <h1>무비 리스트</h1>
      <MovieForm addMovie={addMovie} />
      {render}
    </div>
  );
}

export default App
