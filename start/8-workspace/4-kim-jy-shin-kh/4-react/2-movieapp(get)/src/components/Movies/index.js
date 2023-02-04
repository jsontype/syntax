import { useState, useEffect } from "react"
import "./style.css"

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // api 호출
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  const render = movies.map((item) => {
    const rank = item.rating >= 9 ? "good" : item.rating >= 7 ? "soso" : "bad"

    return (
      <div key={item.id}>
        <div className="movieItem">
          <a className="movieTitle" href={item.url}>
            {item.title} ({item.year})
            <div className="genre">장르 : {item.genres.join(", ")}</div>
            <div className={rank}>
              평점 : {item.rating || "(평점없음)"} / 10
            </div>
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

  return (
    <div>
      <h2 className="title">무비 앱</h2>
      {render}
    </div>
  )
}
