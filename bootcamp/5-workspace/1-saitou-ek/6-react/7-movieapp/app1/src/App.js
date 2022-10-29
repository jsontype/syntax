import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch('https://yts.mx/api/v2/list_movies.json')
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((res) => { return res.json() })
      .then((json) => { setMovies(json.data.movies) })
  }, [])
  
  console.log(movies)

  const render = movies.map((item) => {
    const ratingClass = item.rating >= 9 ? 'good' : item.rating >= 7 ? 'soso' : 'bad'
    return (
      <div key={item.id}>
        <a className='movieTitle' href={item.url}>{item.title}</a>
        <div><span className={ratingClass}>{item.rating}</span> / 10<span>{item.rating >= 9 && '💥'}</span>
        </div>
        <img src={item.large_cover_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>Movie App</h1>
      {render}
    </div>
  )
}

export default App
