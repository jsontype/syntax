import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'
import MovieForm from "./components/MovieForm"
import Navbar from './components/Navbar'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    console.log('movies:', movies)
  })

  const addMovie = (movie) => {    
    setMovies([
      ...movies,
      movie
    ])
  }  

  const removeMovie = (id) => {
    // 파라미터로 삭제할 id를 받고, 그 id가 같은 것을 제외한 movies 배열을 갱신
    setMovies(movies.filter(movie => {
      return movie.id !== id
    }))
  }

  const render = movies.length ? movies.map((movie) => {
    return (
      <Movie
        movie={movie}
        key={movie.id}
        removeMovie={removeMovie}
      />
    )
  }) : '추가된 영화가 없습니다.'

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path="/" exact>
              <h1>Home</h1>
            </Route>
            <Route path="/movies" exact>
              <h1>무비 리스트</h1>
              <MovieForm addMovie={addMovie} />
              {render}
            </Route>
            <Route path="/users" exact>
              <h1>Users</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
