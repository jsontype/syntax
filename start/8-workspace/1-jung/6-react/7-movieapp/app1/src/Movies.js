import React, { useState, useEffect } from "react"

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  console.log(movies)

  const render = movies.map((item) => {
    return (
      <>
        <div className="movies" key={item.id}>
          <a className="movieTitle" href={item.url}>
            <div>
              {item.title} ({item.year})
            </div>
            <div className="movieDetail">
              <div>
                평점: {item.rating >= 9 && "👍"}
                <span
                  className={
                    item.rating === 0
                      ? ""
                      : item.rating >= 9
                      ? "movieRatingGood"
                      : item.rating >= 7
                      ? "movieRatingSoso"
                      : "movieRatingBad"
                  }
                >
                  {item.rating === 0 ? "정보없음" : item.rating}
                </span>{" "}
                / 10
              </div>
              <div>
                상영시간: {item.runtime ? `${item.runtime}분` : "정보없음"}
              </div>
              <div>장르: {item.genres.join(", ")}</div>
            </div>
          </a>

          <img
            className="movieImage"
            src={item.large_cover_image}
            alt={item.title}
          />
        </div>
      </>
    )
  })

  return (
    <>
      <h1>무비 앱</h1>
      <div>{render}</div>
    </>
  )
}
