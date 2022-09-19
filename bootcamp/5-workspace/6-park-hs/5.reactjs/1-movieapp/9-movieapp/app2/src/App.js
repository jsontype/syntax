import React, { useState, useEffect } from 'react'

const App = () => {
  // App에 대한 로직 Start
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies)
      })
  }, [])
  console.log(movies)

  const render = movies.map((item) => {
    const color = (item.rating >= 8) ? "good" : (item.rating >= 6) ? "soso" : "bad"
    const hot = (item.rating >= 8) && "????"
    const genres = () => { return item.genres.join(', ') }
    // render에 대한 DOM Start
    return (
      <div className='movie' key={item.id}>
        <a className='movieTitle' href={item.url} target='_blank' rel='noreferrer'>{item.title} <span className='movieYears'>({item.year})</span></a>
        <img className='movieImage' src={item.background_image} alt='img'></img>
        <div className='rating'>
          <div>
            <span>Rating : </span>
            <span className={color}>{item.rating}</span>
            <span> / 10</span>
            <span>{hot}</span>
          </div>
          <div>
            <span>Genre : </span>
            <span>{genres()}</span>
          </div>
        </div>
      </div>
    )
    // render에 대한 DOM End
  })
  // App에 대한 로직 End

  // App에 대한 DOM Start
  return (
    <div className="App">
      <h1>무비 앱</h1>
      {render}
    </div>
  )
  // App에 대한 DOM End
}

export default App
// 문제 1. 타이틀을 이미지 위로 올리고, 타이틀처럼 보더, 보더래디어스 주고, 가운데정렬 해서 이미지 밑에는 평점이 나오게. 아이템 간 간격 넓히기 마진. = 여기서 해결됨
// 문제 2. for, if를 React 문법으로 해서, item.rating이 8점이상이면 파랑, 6점이상이면 yellowgreen, 6점미만이면 red로 바꾼다.
// 문제 3. for, if를 React 문법으로 해서, item이 8점 이상이면, hot아이콘을 붙인다.
// 문제 4. 아이템별로 장르를 모두 표시한다.
