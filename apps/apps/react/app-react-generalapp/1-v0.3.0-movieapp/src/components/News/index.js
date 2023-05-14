import { useState, useEffect } from "react"
import "./style.css"

export default function Movies() {
  const [news, setNews] = useState([])

  useEffect(() => {
    // api 호출
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, [])

  console.log(news)

  const render = news.map((item) => {
    return (
      <div key={item.id}>
        <div className="newsTitle">{item.title}</div>
      </div>
    )
  })

  return <div>{render}</div>
}
