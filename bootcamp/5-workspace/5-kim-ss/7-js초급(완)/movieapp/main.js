// Document(HTML) Object({}) Model : HTML를 객체로 만든 모델
// console.log(document)
// let app = document.querySelector('#app')
// app.innerHTML = '안녕하세요'

// let url = 'https://yts.mx/api/v2/list_movies.json'
let url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
const movies = []

/**
 * API를 호출한다.
 * @param {String} url url주소
 */
function getMovie(url) {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            movies.push(json.data.movies)
            addItem(movies)
        })
}

/**
 * 무비리스트를 렌더링한다.
 */
function addItem(moives) {
    let arr = movies[0]
    console.log(arr)
    
    for(let i = 0; i < arr.length; i++) {
        // 부모 태그 선택
        let parent = document.querySelector('#app')
        // 자식1 태그 생성
        let child = document.createElement('a')
        // 자식1에게 속성 부여 : id, class, href, target, innerHTML
        // child.setAttribute('id', 'title')
        child.setAttribute('class', 'title')
        child.innerHTML = `${arr[i].title} (${arr[i].year})` // template literal
        child.href = arr[i].url
        child.target = '_blank'
        // 자식2 태그 생성
        let child2 = document.createElement('img')
        child2.setAttribute('class', 'movieImage')
        child2.src = arr[i].medium_cover_image
        // 자식3 태그 생성 : 평점
        let child3 = document.createElement('div')
        child3.setAttribute('class', 'rank')
        child3.innerHTML = `평점 : ${arr[i].rating}/10` // template literal
        if (arr[i].rating >= 8) {
            child3.setAttribute('class', 'rank-blue')
        } else if (arr[i].rating >= 7) {
            child3.setAttribute('class', 'rank-orange')
        } else {
            child3.setAttribute('class', 'rank-red')
        }
        // 자식4 태그 생성 : 추천 아이콘
        let child4 = document.createElement('span')
        child4.setAttribute('class', 'icon')
        if (arr[i].rating >= 8) {
            child4.innerHTML = '🔥'
        } 
        // 부모에게 자식을 붙임
        parent.appendChild(child)
        parent.appendChild(child2)
        parent.appendChild(child3)
        child3.appendChild(child4)
    }
}

getMovie(url)
