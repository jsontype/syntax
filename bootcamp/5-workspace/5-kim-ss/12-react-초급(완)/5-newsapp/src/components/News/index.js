import React, { useState, useEffect } from 'react'
import './style.css'

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => { return res.json() })
      .then((json) => { setNews(json) })
  }, [])

  // console.log(news)

  const render = news.map((item) => {
    return (
    <div className="newsContainer" key={item.id}>
      <a className="news" href={item.url}>{item.title}</a>
      <span className="writer"> - {item.user || "Anonymous "}</span>
    </div>
  )})

  return (
    <div>
      {render}
    </div>
  )
}
