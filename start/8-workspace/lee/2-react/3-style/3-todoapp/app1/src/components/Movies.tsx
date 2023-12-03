import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import styles from "./Movies.module.scss";

type TorrentsProps = {
  url: string;
};

type MoviesProps = {
  id: number;
  url: string;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  runtime: number;
  summary: string;
  large_cover_image: string;
  torrents: TorrentsProps[];
};

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
        setIsLoading(false);
      });
  }, [setMovies, setIsLoading]);

  const render = () => {
    console.log("movies: ", movies);
    return movies.map((item: MoviesProps) => {
      return (
        <div key={item.id} className={styles.movieContainer}>
          <a className={styles.movieTitle} href={item.url}>
            {item.title} ({item.year}) {item.rating >= 9 && "🔥"}
          </a>
          <div className={styles.movieDetail}>
            <img
              className={styles.movieImage}
              src={item.large_cover_image}
              alt={item.title}
            />
            <div className={styles.movieDescription}>
              <div
                className={
                  item.rating >= 9
                    ? styles.good
                    : item.rating >= 7
                    ? styles.notBad
                    : styles.bad
                }
              >
                평점: {item.rating ? item.rating + "/ 10점" : "정보없음"}{" "}
              </div>
              <div>장르 : {item.genres && item.genres.join(", ")}</div>
              <div>
                상영시간 : {item.runtime ? item.runtime + "분" : "정보없음"}
              </div>
              <div>요약 : {item.summary || "정보없음"}</div>
              <div>
                토렌트 :{" "}
                {item.torrents.map((tor, idx) => {
                  return (
                    <span>
                      <a href={tor.url}>#{idx + 1}</a>{" "}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <h1>Movie App</h1>
      <div>{isLoading ? <Loading /> : render()}</div>
    </>
  );
}
