import { memo, useEffect, useMemo } from "react"
import styles from "./style.module.scss"
import axios from "axios"

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

const News = memo(({ news, setNews }: NewsProps) => {
  useEffect(() => {
    // api 호출
    fetchNews("https://api.hnpwa.com/v0/news.json")
  })

  const fetchNews = async (url: string) => {
    try {
      const response = await axios.get(url)
      setNews(response.data)
    } catch (e) {
      console.error("에러발생", e)
    }
  }
  const render = useMemo(
    () =>
      news.map((item) => {
        const rank: string =
          item.points >= 90 ? "good" : item.points >= 70 ? "soso" : "bad"

        return (
          <div key={item.id} className={styles.newsItem}>
            <a className={styles.newsTitle} href={item.url}>
              {item.title}
            </a>
            <div className={styles.newDetailItem}>
              <span className={styles.newsWriter}>작성자 : {item.user}</span>
              <span className={styles.newsPoint}>
                포인트 :{" "}
                <span className={styles[rank]}>
                  {item.points || "(평점없음)"}
                </span>
              </span>
            </div>
          </div>
        )
      }),
    [news]
  )

  return (
    <div>
      <h2 className={styles.title}>뉴스</h2>
      {render}
    </div>
  )
})
export default News
