import React from 'react'
import './Top.css'

export default function Top({ isMovies, setIsMovies, isNews, setIsNews, isTodos, setIsTodos }) {
  const onClickMovies = () => {
    onReset()
    setIsMovies(true)
  }
  const onClickNews = () => { 
    onReset()
    setIsNews(true)
  }
  const onClickTodos = () => { 
    onReset()
    setIsTodos(true)
  }

  const onReset = () => {
    setIsMovies(false)
    setIsNews(false)
    setIsTodos(false)
  }

  return (
    <div className="navbar">
      <div className="navbarItem">로고</div>
      <div className="navbarItem menu" onClick={onClickMovies}>영화</div>
      <div className="navbarItem menu" onClick={onClickNews}>뉴스</div>
      <div className="navbarItem menu" onClick={onClickTodos}>투두</div>
    </div>
  )
}

