import React from 'react'
import './App.css'

function App() {
  const movies = [
    { title: 'movie1', year: 2011},
    { title: 'movie2', year: 2012},
    { title: 'movie3', year: 2013},
    { title: 'movie4', year: 2014},
    { title: 'movie5', year: 2015}
  ]

  const render = movies.map((item) => {
    return (
      <div className='movie' key={item.title}>
        <div className='movieTitle'>{item.title}</div>
        <div className='movieYear'>{item.year}</div>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>무비 리스트</h1>
      {render}
    </div>
  )
}

export default App
