// 전역변수 : 함수 밖에서 변수 선언을 하면, 함수 안, 밖에서 함께 쓸 수 있음
// DOM 부모 지정
let app = document.querySelector('#app')
let movies = []

/**
 * 영화리스트를 HTML 위에 렌더링한다.
 */
function render (item) {
    for (let i = 0; i < item.length; i++) {
        let title = item[i].title
        let year = item[i].year
        let background_image = item[i].large_cover_image
        let url = item[i].url

        // 1. 태그 생성
        let movieTitle = document.createElement('div')
        let movieImage = document.createElement('img')
        let movieLink = document.createElement('a')
        
        // 2. 생성한 태그 수정
        movieTitle.innerHTML = title + ': ' + year
        movieTitle.setAttribute('class', 'movieTitle')
        movieImage.src = background_image
        movieImage.setAttribute('class', 'movieImage')
        movieLink.innerHTML = '> 영화보러가기'
        movieLink.href = url
        movieLink.setAttribute('class', 'movieLink')
        
        // 3. 부모 앱에 자식으로서 추가
        app.appendChild(movieTitle)
        movieTitle.appendChild(movieLink)
        app.appendChild(movieImage)
    }
}    

/**
 * API를 통해 영화리스트를 취득한다.
 */
function getMovie () {
    let url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    // 지역변수 : 여기에다가 변수를 선언하면, 함수 안에서 선언한 것이기 때문에, 함수 안에서만 사용 가능
    // let movies = []
    // API 취득 : fetch
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {            
            render(json.data.movies)
        })
}

getMovie ()