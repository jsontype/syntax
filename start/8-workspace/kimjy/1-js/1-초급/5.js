// ★★ API란?
// 서버에서 미리 만들어둔 기능이며, 서버 개발자가 클라이언트 개발자와 미리 한 약속이다.
// "주소를 이렇게 갖고 오세요 그럼 정보를 이렇게 만들어 드릴게요." 라고 미리 회의를 해서 약속한 대로 만들어서 준다.

// ★★ AJAX란?
// 웹에서의 API 통신은 모두 비동기이다.
// 이런 비동기적인 API 호출방식을 Ajax API 호출이라 한다.

// ★ API 실제 사용해보기
// 사용할 API 주소(예제) : 영화리뷰사이트 API 호출해보겠다.
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
