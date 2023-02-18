let url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
// let url = 'https://yts.mx/api/v2/list_movies.json'
const movies = []

function getMovie (url) {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            movies.push(json.data.movies) 
            addItem(movies)
        })
}

/**
 * API 취득 결과를 렌더링한다.
 * @param {Array} movies 무비 API 취득 결과
 */
function addItem (movies) {
    const arr = movies[0]
    console.log(arr)

    arr.forEach((item) => {
        let app = document.querySelector('#app')

        // 영화제목
        let addItem = document.createElement('a')
        addItem.setAttribute('class', 'movieTitle')
        addItem.innerHTML = item.title
        addItem.href = item.url
        addItem.target = '_blank'

        // 영화이미지
        let addImg = document.createElement('img')
        addImg.setAttribute('class', 'movieImage')
        addImg.src = item.large_cover_image

        // 평점 컨테이너
        let addRankContainer = document.createElement('div')
        addRankContainer.innerHTML = '평점 : '

        // 평점 만점 라벨
        let addFullScoreLabel = document.createElement('span')
        addFullScoreLabel.innerHTML = ' / 10'

        // 평점
        let addRank = document.createElement('span')
        item.rating >= 9 
            ? addRank.setAttribute('class', 'movieRankGood') 
            : item.rating >= 7
                ? addRank.setAttribute('class', 'movieRankNotBad')
                : addRank.setAttribute('class', 'movieRankBad')
        addRank.innerHTML = item.rating

        // 평점 9점 이상일 때 핫 아이콘 추가
        let addHotIcon = document.createElement('span')
        addHotIcon.innerHTML = item.rating >= 9 && '🔥'

        // 렌더링
        app.appendChild(addItem)
        app.appendChild(addRankContainer)
        addRankContainer.appendChild(addRank)
        addRankContainer.appendChild(addFullScoreLabel)
        addRankContainer.appendChild(addHotIcon)
        app.appendChild(addImg)
    })
}

getMovie(url)
