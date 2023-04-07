const movies = []

function getMovieList () {
  // api 호출 명령
  fetch('https://yts.mx/api/v2/list_movies.json')
    .then(function (response) { return response.json() })
    .then(function (json) { 
      for (let i = 0; i < json.data.movies.length; i++) {
        movies.push(json.data.movies[i])
      }
      console.log(movies)
      renderMovieList(movies)
    })
}

function renderMovieList (movies) {
  for (let i = 0; i < movies.length; i++) {
    // 태그 만들기
    let app = document.querySelector('#app')
    let movieItem = document.createElement('div')
    movieItem.setAttribute('class', 'movieItem')

    let movieTitle = document.createElement('a')
    movieTitle.setAttribute('class', 'movieTitle')
    movieTitle.innerHTML = movies[i].title
    movieTitle.href = movies[i].url
    let movieImage = document.createElement('img')
    movieImage.setAttribute('class', 'movieImage')
    movieImage.src = movies[i].large_cover_image

    // 태그 붙이기
    movieItem.appendChild(movieImage)
    movieItem.appendChild(movieTitle)
    app.appendChild(movieItem)
  }
}

getMovieList()
