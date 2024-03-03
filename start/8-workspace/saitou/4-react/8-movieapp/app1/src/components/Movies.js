import React from "react";
import { useState, useEffect } from "react";
import "./Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  // mounted
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
      });
  }, []);

  console.log("movies: ", movies);

  const render = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <a className="movieTitle" href={movie.url}>
          {movie.title}
        </a>
        <img
          className="movieImg"
          src={movie.large_cover_image}
          alt={movie.title}
        ></img>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies</h1>
      <div>{render}</div>
    </div>
  );
}
