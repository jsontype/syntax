import React, { useState, useEffect } from 'react'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies)
      })
  }, [])

  console.log(movies)

  const render = movies.map((item) => { 
    return (
      <div className='movie' key={item.id}>
        <img className='movieImage' src={item.background_image}></img>
        <a className='movieTitle' href={item.url} target='_blank'>{item.title} <span className='movieYears'>({item.year})</span></a>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>무비 앱</h1>
      {render}
    </div>
  )
}

export default App