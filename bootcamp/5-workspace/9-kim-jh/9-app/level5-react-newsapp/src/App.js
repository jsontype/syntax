import { useState, useEffect } from 'react'
import NewsList from './components/NewsList'
import './App.css'

function App() {
  // JS
  const [news, setNews] = useState([])
  const url = 'https://api.hnpwa.com/v0/news.json'
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => setNews(json))
  }, [])
  const appTitle = 'NEWS LIST'
    console.log(news)

  // XML
  return (
    <div className="App">
      <h1> {appTitle}</h1>
      <hr />
      <NewsList news={ news } />
    </div>
  )
}

export default App
