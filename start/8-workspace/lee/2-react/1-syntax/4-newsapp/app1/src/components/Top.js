import React from 'react'
import './Top.css'

export default function Top({ isMovie, setIsMovie, isNews, setIsNews }) {
  const onClickMovie = () => {
    onReset()
    setIsMovie(true)
  }
  const onClickNews = () => { 
    onReset()
    setIsNews(true)
  }
  const onReset = () => {
    setIsMovie(false)
    setIsNews(false)
  }

  return (
    <div className="navbar">
      <div className="navbarItem">로고</div>
      <div className="navbarItem menu" onClick={onClickMovie}>영화</div>
      <div className="navbarItem menu" onClick={onClickNews}>뉴스</div>
    </div>
  )
}

