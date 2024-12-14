import styles from "./style.module.scss"
import { useState, useEffect } from "react"

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      // fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies)
      })
  }, [])

  console.log(movies)

  return (
    <div className={styles.Movies}>
      {movies.length <= 0 ? (
        <div>Loading...</div>
      ) : (
        movies.map((movie) => (
          <div className={styles.movieItem} key={movie.id}>
            <img
              className={styles.movieImg}
              src={movie.large_cover_image}
              alt={movie.title}
            />
            <h3>
              <a
                className={styles.movieTitle}
                href={movie.url}
                target="_blank"
                rel="noreferrer"
              >
                {movie.title} ({movie.year})
              </a>
            </h3>
            <div
              className={`${styles.movieRating} ${
                movie.rating >= 9
                  ? styles.good
                  : movie.rating >= 7
                  ? styles.soso
                  : styles.bad
              }`}
            >
              Rating: {movie.rating} / 10
            </div>
            <div className={styles.movieDescription}>
              Runtime: {movie.runtime ? `${movie.runtime} min.` : "No Data"}
            </div>
            <div className={styles.movieDescription}>
              Genres: {movie.genres ? movie.genres.join(", ") : "No Data"}
            </div>
            <div className={styles.movieDescription}>
              Synopsis:{" "}
              {movie.synopsis.length >= 300
                ? `${movie.synopsis.slice(0, 300)} ...`
                : movie.synopsis || "No Data"}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
