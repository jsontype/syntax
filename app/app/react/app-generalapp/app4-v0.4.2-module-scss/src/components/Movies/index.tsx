import { useState, useEffect } from "react"
import styles from "./style.module.scss"
import MovieDetail from "./MovieDetail"

export type MoviesItemProps = {
  id: number
  title: string
  rating: number
  year: number
  large_cover_image: string
  genres?: string[]
}

type MoviesProps = {
  movies: MoviesItemProps[]
  setMovies: (movies: []) => void
}

export default function Movies({ movies, setMovies }: MoviesProps) {
  // 영화 아이템 중 "타이틀을 클릭해 상세정보가 호출된 영화 아이템"의 id
  const [detailId, setDetailId] = useState(0)

  useEffect(() => {
    // api 호출
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [setMovies])

  // 주의 : render 안에 onClick 프롭 넣을 때는 함수형업데이트 해야함 (예, onClick={() => setIsOpen()})
  const render = movies.map((item) => {
    return (
      <div key={item.id}>
        <div className={styles.movieItem}>
          <div
            className={styles.movieTitle}
            onClick={() => {
              item.id === detailId ? setDetailId(0) : setDetailId(item.id)
            }}
          >
            {item.title}
            {item.rating >= 8 ? "🔥" : ""}({item.year})
          </div>
          <img
            className={styles.movieImage}
            src={item.large_cover_image}
            alt={item.title}
          ></img>
        </div>
        {detailId === item.id && <MovieDetail item={item} />}
      </div>
    )
  })

  return (
    <div>
      <h1 className={styles.title}>무비 앱</h1>
      {render}
    </div>
  )
}
