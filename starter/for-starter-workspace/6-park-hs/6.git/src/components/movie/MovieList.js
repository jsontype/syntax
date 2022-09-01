import React, { useState } from 'react'
import MovieContent from './movieContent/MovieContent'
import './MovieList.css'

export default function MovieList({movies}) {
  const [isContent, setIsContent] = useState(false)
  
  const render = movies.map((item) => {
    const color = (item.rating >= 8) ?  "good" : (item.rating >= 6) ? "soso" : "bad"
    const onClick = () => { 
      setIsContent(!isContent)
    }

    return (
      <div key={item.id}>
        <div className='movie'>
          <img className='movieImage' src={item.large_cover_image} alt={item.title}></img>
          <span onClick={onClick} className='movieTitle' href={item.url}>{item.title}
            <span className={color}>
              <span className="movieRating">{item.rating}</span>
              <span>/10</span>
            </span>          
          </span>
          <div className='movieYear'>{item.year}</div>
        </div>
        { isContent && <MovieContent item={item} /> }
      </div>
    )
  })

  //　html쪽 리턴
  return (
    <div>{render}</div>
  )
}
