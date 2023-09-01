import React, { useState, useEffect } from "react"
import "./App.css"

// 10. context 글로벌스테이트를 사용하기 위해, state를 프롭으로 넘겨받기
export default function Movie({ state }) {
  // 11. state에서 count를 추출
  const { count } = state.counter

  const [movies, setMovies] = useState([])

  // const url = "https://yts.mx/api/v2/list_movies.json"
  const url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies)
      })
  }, [])

  console.log(movies)

  const render = movies.map((item) => {
    return (
      <div key={item.id}>
        <div>
          {item.title} ({item.year}) {item.rating >= 9 && "👍"} / 추천수 :{" "}
          {count}
        </div>
        <div
          className={
            item.rating >= 9 ? "good" : item.rating >= 7 ? "soso" : "bad"
          }
        >
          평점: {item.rating} / 10
        </div>
        <div>
          상영시간: {parseInt(item.runtime / 60)}시간 {item.runtime % 60}분
        </div>
        <div>장르: {item.genres.join(", ")}</div>
        <div>
          줄거리:{" "}
          {item.summary.length > 100
            ? `${item.summary.substring(0, 99)} ...`
            : item.summary}
        </div>
        <img src={item.large_cover_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <>
      <h1>무비앱</h1>
      <div>{render}</div>
    </>
  )
}
