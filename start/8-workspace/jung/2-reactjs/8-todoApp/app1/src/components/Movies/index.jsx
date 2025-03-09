import './style.css';
import { useState, useEffect } from 'react';

export default function Movies({ mode }) {
  const [movies, setMovies] = useState([]);
  const searchMode = mode === 'rating' ? '?sort_by=rating' : mode === 'year' ? '?sort_by=year' : ''

  // mounted, updated
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json${searchMode}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.data.movies);
      });
  }, [searchMode, mode]);

  console.log('movies: ', movies)

  const render = movies.map((item) => {
    return (
      <div key={item.id} className="movie">
        <img src={item.large_cover_image} alt={item.title} />
        <h3>{item.title} ({item.year})</h3>
        <div>Rating: {item.rating} / 10</div>
        <div>Runtime: {item.runtime} min.</div>
        <div>Genres: {item.genres.join(', ')}</div>
      </div>
    );
  })

  return (
    <div>
      <h1>Movies</h1>
      { render }
    </div>
  )
}