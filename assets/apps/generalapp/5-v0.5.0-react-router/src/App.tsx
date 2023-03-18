import { useState } from "react"
import Movies from "./components/Movies"
import News from "./components/News"
import Counter from "./components/Counter"
import Todos from "./components/Todos"
import styles from "./App.module.scss"
import { Routes, Route, Link } from "react-router-dom"

export type TodosItemProps = {
  id: number
  completed: boolean
  title: string
  userId: number
}

export default function App() {
  // JS
  // 카운터 아이템
  const [count, setCount] = useState(0)
  // 뉴스 아이템
  const [news, setNews] = useState([])
  // 투두 아이템
  const [todos, setTodos] = useState<TodosItemProps[]>([])
  const [text, setText] = useState("")
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
        <Route
          path="/counter"
          element={<Counter count={count} setCount={setCount} />}
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
          path="/todos"
          element={
            <Todos
              todos={todos}
              setTodos={setTodos}
              text={text}
              setText={setText}
            />
          }
        ></Route>
        {/* <Route path="/movies" element={<Profile />}>
          <Route path=":rating" element={<Profile />}></Route>
        </Route> */}
      </Routes>
    </div>
  )
}
