// let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
let url = "https://yts.mx/api/v2/list_movies.json"
const movies = []

function getMovie(url) {
    fetch(url)
        .then(res => { return res.json() })
        .then(json => { 
            movies.push(json.data.movies) 
            render(movies)
        })        
}

function render(movies) {
    let app = document.querySelector('#app')
    let arr = movies[0]
    console.log(arr)
    
    for (let i = 0; i < arr.length; i++) {
        // 타이틀 렌더링
        let addTitle = document.createElement('a')
        addTitle.setAttribute('class', 'movieTitle')
        addTitle.innerHTML = arr[i].title
        addTitle.href = arr[i].url
        addTitle.target = '_blank'
        app.appendChild(addTitle)

        // 평점 컨테이너 렌더링
        let addRankContainer = document.createElement('div')
        addRankContainer.innerHTML = '평점 : '
        app.appendChild(addRankContainer)

        // 평점 렌더링
        let addRank = document.createElement('span')
        // 평점이 9점 이상이면 파랑, 7점 이상이면 오렌지, 그 미만이면 빨강
        if (arr[i].rating) {
            if (arr[i].rating >= 9) {
                addRank.setAttribute('class', 'movieRankGood')
            } else if (arr[i].rating >= 7) {
                addRank.setAttribute('class', 'movieRankSoso')
            } else {
                addRank.setAttribute('class', 'movieRankBad')
            }
        } else {
            addRank.setAttribute('class', 'movieRankNone')
        }
        addRank.innerHTML = arr[i].rating
        addRankContainer.appendChild(addRank)

        // 평점 만점 렌더링
        let addRankPerfect = document.createElement('span')
        addRankPerfect.innerHTML = ' / 10'
        addRankContainer.appendChild(addRankPerfect)

        // 커버이미지 렌더링
        let addImg = document.createElement('img')
        addImg.setAttribute('class', 'movieCoverImage')
        if (arr[i].large_cover_image) {
            addImg.src = arr[i].large_cover_image
        } else {
            addImg.src = arr[i].background_image
        }
        app.appendChild(addImg)
    }
}

getMovie(url)
