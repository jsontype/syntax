import { useState, useEffect } from "react"
import Synopsis from "./Synopsis"
import "./style.css"

export default function Movies() {
  // JS
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json")
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  const render = movies.map((item) => {
    return (
      <div className="movie" key={item.id}>
        <div className="movieDetail">
          <h2 className="movieTitle">
            {item.title} {item.rating >= 9 && "💥"}
          </h2>
          <div>연도: {item.year}</div>
          <div
            className={
              item.rating >= 9 ? "good" : item.rating >= 7 ? "soso" : "bad"
            }
          >
            평점: {item.rating !== 0 ? item.rating : "평점없음"} / 10점
          </div>
          <div>장르: {item.genres.join(", ")}</div>
          <div>
            시놉시스:{" "}
            {item.synopsis.length <= 500 ? (
              item.synopsis
            ) : (
              <Synopsis story={item.synopsis} />
            )}
          </div>
        </div>
        <img
          className="movieImage"
          src={item.medium_cover_image}
          alt={item.title}
        />
      </div>
    )
  })

  // XML
  return (
    <>
      <div>{render}</div>
    </>
  )
}
