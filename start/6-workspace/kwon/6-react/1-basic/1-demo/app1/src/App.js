import "./App.css"
import { useState, useEffect } from "react"
import Movies from "./Movies"

export default function App() {
  // js
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies)
      })
  }, [])

  console.log(movies)

  const render = movies.map((item) => {
    return (
      <div>
        <div className="movieItem">
          <a className="movieTitle" href={item.url}>
            {item.title} ({item.year})
            <p className="movieDetail">평점 : {item.rating} / 10점</p>
            <p className="movieDetail">장르 : {item.genres.join(", ")}</p>
            <p className="movieDetail">상영시간 : {item.runtime}분</p>
            <p className="movieDetail">시놉시스 : {item.synopsis}</p>
          </a>
          <img
            className="movieImage"
            src={item.large_cover_image}
            alt={item.title}
          ></img>
        </div>
      </div>
    )
  })

  // xml
  return (
    <div className="App">
      <header className="App-header">
        <h1>무비 앱</h1>
        <p>{render}</p>
        <Movies />
      </header>
    </div>
  )
}
