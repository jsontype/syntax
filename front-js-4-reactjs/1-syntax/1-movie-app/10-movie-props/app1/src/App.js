import React from 'react'
import Movie from './components/Movie'

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
      <Movie movie={movie} key={movie.title} />
    )
  })
  
  return (
    <div className='App'>
      <h1>컴포넌트 + 프롭스 활용 = 무비리스트 컴포넌트화</h1>

      {render}

    </div>
  );
}

export default App
