// API란?

// 사용할 API 주소(예제) : 영화리뷰사이트 API 호출해보겠습니다.
// GET: https://yts.mx/api/v2/list_movies.json?sort_by=rating
// 튜토리얼: https://yts.mx/api

let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
let movies = []

console.log(url)

function getMovie(url) {
  fetch(url)
    // 응답 res를 JSON형태로 파싱(parsing)
    .then((res) => {
      console.log("1. API 데이터: ", res)
      return res.json()
    })
    // 파싱 res를 movies 배열에 담기
    .then((json) => {
      console.log("2. JSON 파싱된 API 데이터: ", json)
      let moviesArray = json.data.movies
      for (let i = 0; i < moviesArray.length; i++) {
        movies.push(moviesArray[i])
      }
      console.log("3. 최종결과물인 movies 배열: ", movies)
    })
    // 에러처리
    .catch((err) => {
      console.log("fetch error: ", err)
    })
}

// 전역변수 movies 배열의 값을 갱신한다.
getMovie(url)
