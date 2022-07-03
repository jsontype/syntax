// API란?

// 사용할 API 주소(예제) : 영화리뷰사이트 API 호출해보겠습니다.
// GET: https://yts.mx/api/v2/list_movies.json?sort_by=rating
// 튜토리얼: https://yts.mx/api

let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
let movies = []

console.log(url)

function getMovie(url) {
    fetch(url)
        .then(res => {
            console.log(res)            
            // 응답 res를 JSON형태로 파싱(parsing)
            return res.json()
        })
        .then(data => {
            console.log(data)
            let moviesArray = data.data.movies
            for (let i = 0; i < moviesArray.length; i++) {
                movies.push(moviesArray[i])
            }
        })
        .catch(err => {
            console.log('fetch error: ', err);
        })
}

// 전역변수 movies 배열의 값을 갱신한다.
getMovie(url)
console.log('movies: ', movies)


