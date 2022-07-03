import React from 'react'

function App() {
  const movies = [
    { title: 'movie1', year: 2011 },
    { title: 'movie2', year: 2012 },
    { title: 'movie3', year: 2013 },
    { title: 'movie4', year: 2014 },
    { title: 'movie5', year: 2015 },
  ]

  const render = movies.map((movie) => {
    return (
      <div className='movie' key={movie.title}>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-year'>{movie.year}</div>
      </div>
    )
  })
  
  return (
    <div className='App'>
      <h1>반복문 렌더링</h1>

      {render}

    </div>
  );
}

export default App
