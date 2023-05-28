import { useState } from "react"
import Movies from "./components/Movies"
import News from "./components/News"
import Counter from "./components/Counter"
import Todos from "./components/Todos"
import styles from "./App.module.scss"

export type TodosItemProps = {
  id: number
  completed: boolean
  title: string
  userId: number
}

export default function App() {
  // JS
  const [isCounter, setCounter] = useState(false)
  const [isMovies, setIsMovies] = useState(false)
  const [isNews, setIsNews] = useState(false)
  const [isTodos, setIsTodos] = useState(false)

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
      <button
        className={styles.navbarItem}
        onClick={() => {
          setCounter(!isCounter)
          setIsNews(false)
          setIsMovies(false)
          setIsTodos(false)
        }}
      >
        카운터
      </button>
      <button
        className={styles.navbarItem}
        onClick={() => {
          setIsMovies(!isMovies)
          setIsNews(false)
          setCounter(false)
          setIsTodos(false)
        }}
      >
        무비
      </button>
      <button
        className={styles.navbarItem}
        onClick={() => {
          setIsNews(!isNews)
          setIsMovies(false)
          setCounter(false)
          setIsTodos(false)
        }}
      >
        뉴스
      </button>
      <button
        className={styles.navbarItem}
        onClick={() => {
          setIsTodos(!isTodos)
          setIsNews(false)
          setIsMovies(false)
          setCounter(false)
        }}
      >
        투두
      </button>
      {isCounter && <Counter count={count} setCount={setCount} />}
      {isMovies && <Movies movies={movies} setMovies={setMovies} />}
      {isNews && <News news={news} setNews={setNews} />}
      {isTodos && (
        <Todos
          todos={todos}
          setTodos={setTodos}
          text={text}
          setText={setText}
        />
      )}
    </div>
  )
}
