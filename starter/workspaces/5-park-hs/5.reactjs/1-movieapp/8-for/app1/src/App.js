import React from 'react'

const App = () => {
  const movies = [
    { title: 'movie1', year: 2011 },
    { title: 'movie2', year: 2012 },
    { title: 'movie3', year: 2013 },
    { title: 'movie4', year: 2014 },
    { title: 'movie5', year: 2015 },
  ]

  // 리액트 반복문 문제 : movieTitle이라는 클래스네임을 가진 div를 만들고 그 안에 Title을 뿌려주고, movieYears라고 하는 클래스네임을 가진 div안에는 Year를 뿌려준다.
  const render = movies.map((item) => { 
    return (
      <div className='movie' key={item.title}>
        <div className='movieTitle'>{item.title}</div>
        <div className='movieYears'>{item.year}</div>
      </div>
    )
  })
  

  return (
    <div className="App">
      {render}
    </div>
  )
}

export default App