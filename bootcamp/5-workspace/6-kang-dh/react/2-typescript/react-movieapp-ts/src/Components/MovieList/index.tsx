import { useState } from 'react'
import './style.css'
import MovieDetail from './MovieDetail'

type MovieListItemProps = {
  rating: number,
  id: number,
  url: string,
  title: string,
  large_cover_image: string,
  genres: string[],
  runtime: number,
  summary: string,
  year: number,
  synopsis: string,
}

type MovieListProps = {
  movies: MovieListItemProps[]
}

export default function MovieList({ movies }: MovieListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentId, setCurrentId] = useState<number>(0)

  console.log(movies)

  const render = movies.map(item => {
    const movieRank = item.rating >= 9 ? 'movieRankGood' : item.rating >= 7 ? 'movieRankSoso' : 'movieRankBad' 
    const hotIcon = item.rating >= 9 && '🔥'
    
    const onClick = () => { 
      setIsOpen(true)
      // 다 열리는 문제 해결 : "id"가 "타이틀을 클릭한 id"와 동일한 것을 찾아서 연다.
      setCurrentId(item.id)
      isOpen && currentId === item.id && setIsOpen(!isOpen)
    }

    return (
      <div key={item.id}>
        <div className='movieTitle' onClick={onClick}>{item.title}</div>
        <div><span>{hotIcon}</span> 평점 : <span className={movieRank}>{item.rating}</span> / 10</div>
        {isOpen && item.id === currentId && <MovieDetail item={item} />}
        <img src={item.large_cover_image} alt={item.title} />
      </div>
    )
  })

  return (
    <div>{render}</div>
  )
}
