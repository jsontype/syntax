import './App.css'
import { useState, useEffect } from 'react'
import { Movie } from './common/types'
import Movies from './components/Movies'

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([{ title: '', rating: 0, year: 0, large_cover_image: '' }])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  console.log(movies)

  return (
    <>
      <Movies movies={movies} />
    </>
  )
}

export default App
