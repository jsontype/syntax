import "./App.css"
import { useState, useEffect } from "react"

function App() {
  // JS
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      // fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  console.log(movies)

  const render = movies.map((item) => {
    const rank = () => {
      if (item.rating >= 9) {
        return "good"
      } else if (item.rating >= 7) {
        return "soso"
      } else {
        return "bad"
      }
    }

    return (
      <div className="movieList" key={item.id}>
        <a className="movieTitle" href={item.url}>
          {item.title} ({item.year})
          <div className={rank()}>평점: {item.rating} / 10</div>
        </a>
        <img
          className="movieImage"
          width="auto"
          src={item.large_cover_image}
          alt={item.title}
        ></img>
      </div>
    )
  })

  // XML
  return (
    <div className="App">
      <h1>무비앱</h1>
      <div>{render}</div>
    </div>
  )
}

export default App
