import { useState } from "react"
import Movies from "./components/Movies"
import News from "./components/News"
import TodosContainer from "components/Todos/container"
import styles from "./App.module.scss"
import { Routes, Route, Link } from "react-router-dom"
import CounterContainer from "components/Counter/container"
import { useTranslation } from "react-i18next"

export type TodosItemProps = {
  id: number
  completed: boolean
  title: string
  userId: number
}

export default function App({ i18n }: any) {
  // JS
  const { t } = useTranslation()

  const onChangeToKO = () => {
    i18n.changeLanguage("ko")
  }

  const onChangeToJA = () => {
    i18n.changeLanguage("ja")
  }

  // 뉴스 아이템
  const [news, setNews] = useState([])
  // 영화 아이템
  const [movies, setMovies] = useState([])

  // XML
  return (
    <div className={styles.App}>
      <Link to="/counter">
        <button className={styles.navbarItem}>{String(t("nav:navCounter"))}</button>
      </Link>
      <Link to="/movies">
        <button className={styles.navbarItem}>{String(t("nav:navMovie"))}</button>
      </Link>
      <Link to="/news">
        <button className={styles.navbarItem}>{String(t("nav:navNews"))}</button>
      </Link>
      <Link to="/todos">
        <button className={styles.navbarItem}>{String(t("nav:navTodo"))}</button>
      </Link>

      <span className={styles.langBtnContainer}>
        <button className={styles.langBtn} onClick={() => onChangeToKO()}>
        {String(t("nav:langKo"))}
        </button>
        <button className={styles.langBtn} onClick={() => onChangeToJA()}>
        {String(t("nav:langJP"))}
        </button>
      </span>

      <Routes>
        <Route path="/counter" element={<CounterContainer />}></Route>
        <Route
          path="/movies"
          element={<Movies movies={movies} setMovies={setMovies} />}
        ></Route>
        <Route
          path="/news"
          element={<News news={news} setNews={setNews} />}
        ></Route>
        <Route path="/todos" element={<TodosContainer />}></Route>
        {/* <Route path="/movies" element={<Profile />}>
          <Route path=":rating" element={<Profile />}></Route>
        </Route> */}
      </Routes>
    </div>
  )
}
