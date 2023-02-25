import { useEffect } from "react"
import styles from "./style.module.scss"

type NewsItemProps = {
  points: number
  id: number
  url: string
  title: string
  user: string
}

type NewsProps = {
  news: NewsItemProps[]
  setNews: (news: []) => void
}

export default function News({ news, setNews }: NewsProps) {
  useEffect(() => {
    // api 호출
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, [setNews])

  const render = news.map((item) => {
    const rank = item.points >= 90 ? "good" : item.points >= 70 ? "soso" : "bad"

    return (
      <div key={item.id} className={styles.newsItem}>
        <a className={styles.newsTitle} href={item.url}>
          {item.title}
        </a>
        <div className={styles.newDetailItem}>
          <span className={styles.newsWriter}>작성자 : {item.user}</span>
          <span className={styles.newsPoint}>
            포인트 :{" "}
            <span className={styles[rank]}>{item.points || "(평점없음)"}</span>
          </span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h2 className={styles.title}>뉴스</h2>
      {render}
    </div>
  )
}
