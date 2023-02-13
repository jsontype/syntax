import { useEffect } from "react"
import "./style.css"

type NewsItemProps = {
  points: number,
  id: number,
  url: string,
  title: string,
  user: string,
}

type NewsProps = {
  news: NewsItemProps[],
  setNews: (news: []) => void,
}

export default function News({ news, setNews }: NewsProps) {
  useEffect(() => {
    // api 호출
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, [])

  const render = news.map((item) => {
    const rank = item.points >= 90 ? "good" : item.points >= 70 ? "soso" : "bad"

    return (
      <div key={item.id} className="newsItem">
        <a className="newsTitle" href={item.url}>
          {item.title}
        </a>
        <div className="newDetailItem">
          <span className="newsWriter">
            작성자 : {item.user}
          </span>
          <span className="newsPoint">
            포인트 : <span className={rank}>{item.points || "(평점없음)"}</span>
          </span>
        </div>
      </div>
    )
  })

  return(
    <div>
      <h2 className="title">뉴스 </h2>
      {render}
    </div>
  )
}
