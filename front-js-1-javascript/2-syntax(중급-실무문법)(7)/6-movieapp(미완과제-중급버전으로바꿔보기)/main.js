/**
 * 초기 화면을 설정한다.
 */
let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
let movies = []

function init() {
    getMovie(url)
}

/**
 * API를 호출한다.
 */
function getMovie (url) {
    fetch(url)
        // .then : API 호출이 끝나면
        // res : response 응답
        .then(res => {
            // res를 JSON화
            return res.json()
        })
        // JSON화된 정보를 movies 전역변수에 push
        .then(json => {
            movies.push(json.data.movies)
            addItem(movies)
        })   
}

/**
 * 무비 리스트를 추가한다.
 */
 function addItem(movies) {
    // API 호출
    let arr = movies[0]
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        // 부모 선택
        let app = document.querySelector('#app')
        // 자식 생성 : 타이틀
        let addItem = document.createElement('a')
        addItem.setAttribute('id', 'title')
        addItem.setAttribute('class', 'title')
        addItem.innerHTML = arr[i].title
        addItem.href = arr[i].url
        addItem.target = '_blank'
        // 자식 생성 : 배경이미지
        let addImg = document.createElement('img')
        addImg.src = arr[i].background_image
        addImg.setAttribute('id', 'img')
        addImg.setAttribute('class', 'movieImage')
        // addImg.style.width = '300px'
        // 부모에게 자식을 붙임
        app.appendChild(addItem)
        app.appendChild(addImg)
    }
}


// 초기 화면 설정
init()