// CSS
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //JS
  const [movies, setMovies] = useState([])

  useEffect(() => { 
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then(res => res.json())
      .then(json => setMovies(json.data.movies))
  }, [])

  console.log('movies:', movies)

  const render = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <img src={movie.large_cover_image} className='movieImage' />
        <div className='movieTitle'>{movie.title}</div>
        <hr />
      </div>
    )
  })

  // HTML
  return (
    <>
      {render}
    </>
  )
}

export default App
