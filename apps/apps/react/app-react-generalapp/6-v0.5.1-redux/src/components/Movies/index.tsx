import { useState, useEffect } from "react"
import styles from "./style.module.scss"
import MovieDetail from "./MovieDetail"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

export type MoviesItemProps = {
  id: number
  title: string
  rating: number
  year: number
  large_cover_image?: string
  medium_cover_image?: string
  small_cover_image?: string
  background_image?: string
  genres?: string[]
}

type MoviesProps = {
  movies: MoviesItemProps[]
  setMovies: (movies: []) => void
}

export default function Movies({ movies, setMovies }: MoviesProps) {
  // 영화 아이템 중 "타이틀을 클릭해 상세정보가 호출된 영화 아이템"의 id
  const [detailId, setDetailId] = useState(0)
  const [searchParams] = useSearchParams()
  const sort = searchParams.get("sort")
  const [sortStandard, setSortStandard] = useState<string | null>("")

  useEffect(() => {
    // api 호출
    setSortStandard(sort)

    switch (sortStandard) {
      case "title":
        fetch("https://yts.mx/api/v2/list_movies.json?sort_by=title")
          .then((res) => res.json())
          .then((json) => setMovies(json.data.movies))
        break
      case "rating":
        fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
          .then((res) => res.json())
          .then((json) => setMovies(json.data.movies))
        break
      case "year":
        fetch("https://yts.mx/api/v2/list_movies.json?sort_by=year")
          .then((res) => res.json())
          .then((json) => setMovies(json.data.movies))
        break
      case "date_added":
        fetch("https://yts.mx/api/v2/list_movies.json?sort_by=date_added")
          .then((res) => res.json())
          .then((json) => setMovies(json.data.movies))
        break
      default:
        fetch("https://yts.mx/api/v2/list_movies.json")
          .then((res) => res.json())
          .then((json) => setMovies(json.data.movies))
    }
  }, [setMovies, sort, sortStandard])

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

  // localhost:3000/movies?sort=rating

  return (
    <div>
      <h1 className={styles.title}>무비 앱</h1>
      <div className={styles.sortBtnList}>
        <Link to="/movies?sort=title">
          <button className={styles.sortBtn}>제목순</button>
        </Link>
        <Link to="/movies?sort=rating">
          <button className={styles.sortBtn}>평점순</button>
        </Link>
        <Link to="/movies?sort=year">
          <button className={styles.sortBtn}>개봉연도순</button>
        </Link>
        <Link to="/movies?sort=date_added">
          <button className={styles.sortBtn}>등록순</button>
        </Link>
      </div>
      {render}
    </div>
  )
}
