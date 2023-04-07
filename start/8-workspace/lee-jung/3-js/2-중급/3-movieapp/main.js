function getAPI() {
  // 로딩 시작
  let parent = document.querySelector("#app")
  parent.innerHTML = "로딩중..."

  // API 취득하기
  // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((res) => res.json())
    .then((json) => {
      let movies = json.data.movies
      console.log(movies)

      // 로딩 끝
      parent.innerHTML = ""

      // DOM (Document Object Model) 조작하기 : DOM은 JS가 (HTML 문서를 조작하기 위해) HTML 문서를 객체화해서 document에 담은 것
      for (let i = 0; i < movies.length; i++) {
        // 타이틀
        let movieTitle = document.createElement("a")
        movieTitle.setAttribute("class", "movieTitle")
        movieTitle.innerHTML = movies[i].title
        movieTitle.href = movies[i].url
        parent.appendChild(movieTitle)

        // 레이팅
        let movieRating = document.createElement("div")
        movies[i].rating >= 9
          ? movieRating.setAttribute("class", "movieRatingGood")
          : movies[i].rating >= 7
          ? movieRating.setAttribute("class", "movieRatingSoso")
          : movieRating.setAttribute("class", "movieRatingBad")
        goodIcon = movies[i].rating >= 9 ? "💥" : ""
        movieRating.innerHTML = `평점: ${movies[i].rating} / 10점 ${goodIcon}`
        parent.appendChild(movieRating)

        // 이미지
        let movieImage = document.createElement("img")
        movieImage.src = movies[i].medium_cover_image
        parent.appendChild(movieImage)
      }
    })
}

function init() {
  getAPI()
}

init()
