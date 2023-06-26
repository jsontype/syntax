import React, { useState } from 'react'
import MovieDetail from './MovieDetail'
import './style.css'

type MovieListItemProps = {
  rating: number,
  id: number,
  url: string,
  title: string,
  large_cover_image: string,
  genres: string[],
  runtime: number,
  summary: string,  
}

type MovieListProps = {
  movies: MovieListItemProps[]
}

export default function MovieList({ movies }: MovieListProps) {
    const [isDetail, setIsDetail] = useState<boolean>(false)
    const [id, setId] = useState<number>(0)

    const render = movies.map(item => {
        const onClick = () => {
            setIsDetail(true)
            setId(item.id)
            id === item.id && setIsDetail(!isDetail)          
        }

        console.log(isDetail)

        // setItemId(item.id)
        // console.log("imteId = " + itemId)
        // console.log("item.id = d" + item.id)
      
      return (
        <div key={item.id}>
          <div className='movieTitle' onClick={onClick}>{item.title}</div>         
          { isDetail && item.id === id && <MovieDetail item={item} /> }
          <img src={item.large_cover_image} alt={item.title} /> 
        </div>
      )
    })

    return (
        <>
            {render}
        </>
    )
}
