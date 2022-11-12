import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './Movies'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    // fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(json => { setMovies(json.data.movies) })
  }, [])

  return (
    <div className="App">      
      <Movies movies={movies} />
    </div>
  );
}

export default App;
