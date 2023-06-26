import "./App.css"
import { useState } from "react"
import Movies from "./components/Movies"
import News from "./components/News"
import Counter from "./components/Counter"

export default function App() {
  // JS
  const [isMovies, setIsMovies] = useState(false)
  const [isNews, setIsNews] = useState(false)
  const [isCounter, setCounter] = useState(false)

  // XML
  return (
    <div className="App">
      <button
        className="navbarItem"
        onClick={() => {
          setIsMovies(!isMovies)
          setIsNews(false)
          setCounter(false)
        }}
      >
        무비
      </button>
      <button
        className="navbarItem"
        onClick={() => {
          setIsNews(!isNews)
          setIsMovies(false)
          setCounter(false)
        }}
      >
        뉴스
      </button>
      <button
        className="navbarItem"
        onClick={() => {
          setCounter(!isCounter)
          setIsNews(false)
          setIsMovies(false)
        }}
      >
        카운터
      </button>
      {isMovies && <Movies />}
      {isNews && <News />}
      {isCounter && <Counter />}
    </div>
  )
}
