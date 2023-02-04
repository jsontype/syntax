import "./App.css"
import { useState } from "react"
import Movies from "./components/Movies"
import News from "./components/News"

export default function App() {
  // JS
  const [isMovies, setIsMovies] = useState(false)
  const [isNews, setIsNews] = useState(false)

  // XML
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsMovies(!isMovies)
          setIsNews(false)
        }}
      >
        무비
      </button>
      <button
        onClick={() => {
          setIsNews(!isNews)
          setIsMovies(false)
        }}
      >
        뉴스
      </button>
      {isMovies && <Movies />}
      {isNews && <News />}
    </div>
  )
}
