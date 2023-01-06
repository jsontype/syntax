// CSS
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //JS
  const [movies, setMovies] = useState([])

  useEffect(() => { 
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    // fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res => res.json())
      .then(json => setMovies(json.data.movies))
  }, [])

  console.log('movies:', movies)

  const render = movies.map((movie) => {
    return (
      <>
        <div key={movie.id}>
          <div className='movie'>
            <img src={movie.large_cover_image} className='movieImage' alt={movie.title} />
            <a href={movie.url} className='movieTitle'>{movie.rating >= 8 && '🔥'} {movie.title} ({movie.year}) ({movie.rating}/10)</a>
          </div>
          <div className='movieContent'>
            <div>평점<br/><span className={movie.rating >= 8 ? 'good' : movie.rating >= 6 ? 'soso' : 'bad'}>{movie.rating}</span>/10</div>
            <div>장르<br/><span className='movieGenres'>{movie.genres && movie.genres.join(', ')}</span></div>
            <div>시놉시스<br/><span className='movieSynopsis'>{movie.synopsis}</span></div>
          </div>
        </div>
      </>
    )
  })

  // HTML
  return (
    <>
      <h1 className='title'>무비리스트</h1>
      {render}
    </>
  )
}

export default App
