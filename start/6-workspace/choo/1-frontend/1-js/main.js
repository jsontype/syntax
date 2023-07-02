// 이벤트리스너 함수
function init() {
  // 일반
  const url = "https://yts.mx/api/v2/list_movies.json"
  // 평점별
  // const url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
  // 연도별
  // const url = "https://yts.mx/api/v2/list_movies.json?sort_by=year"
  fetch(url)
    .then((res) => res.json())
    .then((json) => render(json.data.movies))
}

function render(movies) {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i]

    console.log(movie)

    // 퀘스트 : 평점이 9점이상인 작품은 제목 뒤에, 👍 이모지를 붙여주세요.

    // 영화 제목
    const movieTitle = document.createElement("a")
    if (movie.rating >= 9) {
      movieTitle.innerText = `${movie.title} 👍`
    } else {
      movieTitle.innerText = movie.title
    }
    movieTitle.href = movie.url
    movieTitle.target = "_blank"
    movieTitle.setAttribute("class", "movieTitle")

    // 영화 이미지
    const movieImage = document.createElement("img")
    movieImage.src = movie.large_cover_image
    movieImage.setAttribute("class", "movieImage")

    // 영화 평점
    const movieRating = document.createElement("div")
    movieRating.innerText = "평점: " + movie.rating + " / 10점"
    if (movie.rating >= 9) {
      movieRating.setAttribute("class", "movieRatingGood")
    } else if (movie.rating >= 7) {
      movieRating.setAttribute("class", "movieRatingSoso")
    } else {
      movieRating.setAttribute("class", "movieRatingBad")
    }

    // 만든 것들 붙이기
    document.body.appendChild(movieTitle)
    document.body.appendChild(movieRating)
    document.body.appendChild(movieImage)
  }
}

init()

// console.log(document)
// console.log("console: ", console)

// 동기처리 : 순서대로
// 비동기처리 : 경주

// DOM : Document Object Model
// OOP : Object Oriented Programming 객체지향프로그래밍
// OOL : Object Oriented Language 객체지향언어 (자바, 자바스크립트 등)
