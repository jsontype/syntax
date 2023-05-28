import React, { useState, useEffect } from "react"

export default function Movie() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  console.log(movies)

  const render = movies.map((item) => {
    return (
      <div key={item.id}>
        <div>
          {item.title} ({item.year})
        </div>
        <div>평점: {item.rating} / 10점</div>
        <img src={item.medium_cover_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <div>
      <h1>영화 앱</h1>
      <div>{render}</div>
    </div>
  )
}
