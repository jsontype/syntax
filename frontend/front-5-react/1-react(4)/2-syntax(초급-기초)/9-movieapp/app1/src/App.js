import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setMovies(json.data.movies)
      })
  }, [])

  console.log('movies: ', movies)

  const render = movies.map((item) => {
    return (
      <div className="movie" key={item.id}>
        <a className="movieTitle" href={item.url}>
          {item.title}
        </a>
        <img
          className="movieImage"
          src={item.background_image}
          alt={item.title}
        ></img>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>무비 리스트</h1>
      {render}
    </div>
  )
}

export default App
