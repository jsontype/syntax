// API란?

// 사용할 API 주소(예제) : 영화리뷰사이트 API 호출해보겠습니다.
// GET: https://yts.mx/api/v2/list_movies.json?sort_by=rating
// 튜토리얼: https://yts.mx/api

// let url = "https://yts.mx/api/v2/list_movies.json" // For Rating Test
let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating" // Normal
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
            let moviesArray = json.data.movies
            moviesArray.forEach((item) => movies.push(item))
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
    movies.forEach((item) => makeMovieList(item))
}

function makeMovieList(movieObj) {
    // hot icon 생성
    let hotIcon = document.createElement("img")
    hotIcon.src = "hot.png"
    hotIcon.setAttribute("class", "icon")

    // 무비 타이틀 생성
    let title = document.createElement("a")
    title.setAttribute("class", "title")
    title.innerHTML = movieObj.title
    title.href = movieObj.url

    // 무비 이미지 생성
    let image = document.createElement("img")
    image.setAttribute("class", "image")
    image.src = movieObj.background_image
    // 평점 텍스트 생성
    let rank = document.createElement("p")
    rank.setAttribute("class", "rank")
    rank.innerHTML = `${movieObj.rating} / 10.0`
    // 평점에 따라 색깔 스타일 변경
    let ratingColor = changeRatingColor(movieObj.rating)
    rank.style.color = ratingColor

    // 부모 태그에 붙이기
    let parent = document.querySelector("#movies")
    parent.appendChild(title)
    parent.appendChild(image)
    parent.appendChild(rank)

    // 2. 평점이 8점 이상인 애들만
    // && 앰퍼센드 (ampersand)
    movieObj.rating >= 8 && title.appendChild(hotIcon)
}

/**
 * 평점에 따라 평점 텍스트 색깔을 바꿔준다.
 * @param {Number} rating 영화 평론가 평점
 * @return {String} 평점에 따라 나눠진 색깔
 */
function changeRatingColor (rating) {
    return rating <= 5 ? "red" : rating < 8 ? "#CCCC00" : "blue"
}