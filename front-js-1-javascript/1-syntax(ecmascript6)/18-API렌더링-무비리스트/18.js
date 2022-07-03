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
            // console.log(res)
            // 응답 res를 JSON형태로 파싱(parsing)
            return res.json()
        })
        .then(json => {
            // 취득 성공 확인
            console.log(json)
            let moviesArray = json.data.movies
            for (let i = 0; i < moviesArray.length; i++) {
                movies.push(moviesArray[i])
            }
            // *** 비동기이므로 아래를 먼저 실행하고 제일 마지막에 여기를 실행
            render(movies)
        })
        .catch(err => {
            console.log('fetch error: ', err);
        })
}

// 전역변수 movies 배열의 값을 갱신한다.
getMovie(url)

// render(movies) // *** 비동기이므로 얘를 먼저 실행하면 안됨

function render(movies) {
    for (let i = 0; i < movies.length; i++) {
        // console.log('moviesObj: ', movies[i])
        makeMovieList(movies[i])        
    }
}

function makeMovieList(movieObj) {
    let title = document.createElement("a")
    title.setAttribute("class", "title")
    let image = document.createElement("img")
    image.setAttribute("class", "image")
    let rank = document.createElement("p")
    rank.setAttribute("class", "rank")
    let parent = document.querySelector("#movies")

    title.innerHTML = movieObj.title
    title.href = movieObj.url
    image.src = movieObj.background_image
    rank.innerHTML = `${movieObj.rating} / 10.0`
    parent.appendChild(title)
    parent.appendChild(image)
    parent.appendChild(rank)
}