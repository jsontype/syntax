import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(json => setMovies(json.data.movies))
  }, [])

  const render = movies.map((item) => {
    return (
      <div key={item.id}>
        <a href={item.url}>{item.title}</a>
      </div>
    )
  })

  return (
    <div className="App">
      <div>{render}</div>
    </div>
  )
}
