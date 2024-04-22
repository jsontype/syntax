import { memo, useState, useEffect, useMemo } from "react"
import styles from "./style.module.scss"
import MovieDetail from "./MovieDetail"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import { useTranslation } from "react-i18next"

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

const Movies = memo(({ movies, setMovies }: MoviesProps) => {
    // 영화 아이템 중 "타이틀을 클릭해 상세정보가 호출된 영화 아이템"의 id
  const [detailId, setDetailId] = useState(0)
  const [searchParams] = useSearchParams()
  const sort = searchParams.get("sort")
  const [sortStandard, setSortStandard] = useState<string | null>("")
  const { t } = useTranslation()

  useEffect(() => {
    // api 호출
    setSortStandard(sort)

    const fetchMoives = async (url: string) => {
      try {
        const response = await axios.get(url)
        setMovies(response.data.data.movies)
      }  catch(e) {
        console.error('에러발생', e)
      }
    }

    switch (sortStandard) {
      case "title":
        fetchMoives("https://yts.mx/api/v2/list_movies.json?sort_by=title")
        break
      case "rating":
        fetchMoives("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
        break
      case "year":
        fetchMoives("https://yts.mx/api/v2/list_movies.json?sort_by=year")
        break
      case "date_added":
        fetchMoives("https://yts.mx/api/v2/list_movies.json?sort_by=date_added")
        break
      default:
        fetchMoives("https://yts.mx/api/v2/list_movies.json")
    }
  }, [setMovies, sort, sortStandard])

  // 주의 : render 안에 onClick 프롭 넣을 때는 함수형업데이트 해야함 (예, onClick={() => setIsOpen()})
  const render = useMemo(() => movies.map((item) => {
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
 }), [detailId, movies]
  )

  // localhost:3000/movies?sort=rating

  return (
    <div>
      <h1 className={styles.title}>{(t("movies:title"))}</h1>
      <div className={styles.sortBtnList}>
        <Link to="/movies?sort=title">
          <button className={styles.sortBtn}>{(t("movies:movieTitleOrder"))}</button>
        </Link>
        <Link to="/movies?sort=rating">
          <button className={styles.sortBtn}> {(t("movies:movieRatingOrder"))}</button>
        </Link>
        <Link to="/movies?sort=year">
          <button className={styles.sortBtn}> {(t("movies:movieReleaseOrder"))}</button>
        </Link>
        <Link to="/movies?sort=date_added">
          <button className={styles.sortBtn}> {(t("movies:movieRegistrationOrder"))}</button>
        </Link>
      </div>
      {render}
    </div>
  )
})
export default Movies