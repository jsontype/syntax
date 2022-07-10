import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'

function App() {
  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
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

  const onSubmit = (event) => {    
    event.preventDefault()
    setMovies([
      ...movies, // 이게 없으면 기존 무비 배열이 삭제됨
      {
          title: movieTitle,
          year: movieYear,
      }])
    console.log(movieTitle, movieYear)
    movies.push({
        title: movieTitle,
        year: movieYear,
    })
    // 인풋을 초기화 시킴
    setMovieTitle('')
    setMovieYear('')
  }

  return (
    <div className='App'>
      <h1>무비 리스트 추가 폼</h1>
      <form onSubmit={onSubmit}>
        <input
            type="text"
            value={movieTitle}
            placeholder="영화제목"
            onChange={e => setMovieTitle(e.target.value)}
        /><br />
        <input
            type="text"
            value={movieYear}
            placeholder="개봉년도"
            onChange={e => setMovieYear(e.target.value)}
        /><br />
        <button type="submit">영화추가</button>
      </form>

      {render}

    </div>
  );
}

export default App
