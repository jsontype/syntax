import { useState } from "react"
import Movies from "./components/Movies"
import News from "./components/News"
import TodosContainer from "components/Todos/container"
import styles from "./App.module.scss"
import { Routes, Route, Link } from "react-router-dom"
import CounterContainer from "components/Counter/container"

export type TodosItemProps = {
  id: number
  completed: boolean
  title: string
  userId: number
}

export default function App() {
  // JS
  // 뉴스 아이템
  const [news, setNews] = useState([])
  // 영화 아이템
  const [movies, setMovies] = useState([])

  // XML
  return (
    <div className={styles.App}>
      <Link to="/counter">
        <button className={styles.navbarItem}>카운터</button>
      </Link>
      <Link to="/movies">
        <button className={styles.navbarItem}>무비</button>
      </Link>
      <Link to="/news">
        <button className={styles.navbarItem}>뉴스</button>
      </Link>
      <Link to="/todos">
        <button className={styles.navbarItem}>투두</button>
      </Link>

      <Routes>
        <Route path="/counter" element={<CounterContainer />}
        ></Route>
        <Route
          path="/movies"
          element={<Movies movies={movies} setMovies={setMovies} />}
        ></Route>
        <Route
          path="/news"
          element={<News news={news} setNews={setNews} />}
        ></Route>
        <Route
          path="/todos" element={<TodosContainer />}></Route>
        {/* <Route path="/movies" element={<Profile />}>
          <Route path=":rating" element={<Profile />}></Route>
        </Route> */}
      </Routes>
    </div>
  )
}
