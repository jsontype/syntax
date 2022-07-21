// CSS
import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  // JS
  const [movieList, setMovieList] = useState([])

  // Created 시점에서 API 불러오자.
  useEffect(() => {    
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(json => setMovieList(json.data.movies))
    }, []
  )

  console.log(movieList)

  const render = movieList.map((item) => {
    const ratingColor = item.rating >= 8 ? 'good' : item.rating >= 6 ? 'soso' : 'bad'
    return (
      <>
        <div className='movie' key={item.id}>
          <img src={item.large_cover_image} className='movieImage'></img>
          <div className='movieTitle'>          
            <a className='movieLink' href={item.url}>{item.title} { item.rating >= 8 && '🔥' }</a>
          </div>
          <div className='movieYear'>{item.year}</div>
        </div>
        <div className='movieContent'>
          <div className='movieGenres'>장르: {item.genres.join(', ')}</div>
          <div className='movieRating'>평점: <span className={ratingColor}>{item.rating}</span>/10</div>
          <p className='movieSynopsis'>시놉시스: {item.synopsis}</p>        
        </div>
      </>
    )
  })

  // HTML
  return (
    <>
      <h1>Movie App</h1>
      {render}
    </>
  )
}
