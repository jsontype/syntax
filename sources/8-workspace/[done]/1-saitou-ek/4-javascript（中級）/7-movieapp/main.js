// let url = "https://yts.mx/api/v2/list_movies.json"
let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
const movies = []

/**
 * apiを取得する。
 */
function getMovie (url) {
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
 * レンダリングする。
 */
function addItem (movies) {
    let arr = movies[0]
    console.log(arr)
    
    // !!!
    arr.forEach((item) => {
        let app = document.querySelector('#app')

        // タイトルを付ける。
        let addItem = document.createElement('a')
        addItem.innerHTML = item.title
        addItem.href = item.url
        addItem.target = '_blank'
        app.appendChild(addItem)

        // ランクを付ける。
        let addRank = document.createElement('div')
        // !!!
        item.rating >= 9 ? addRank.setAttribute('class', 'good') : item.rating >= 7 ? addRank.setAttribute('class', 'soso') : addRank.setAttribute('class', 'bad')
        addRank.innerHTML = `評価点数：${item.rating}/10点`
        app.appendChild(addRank)

        // Hot Icon付ける。
        let addHotIcon = document.createElement('span')
        // !!!
        addHotIcon.innerHTML = item.rating >= 9 && '💥' 
        addRank.appendChild(addHotIcon)

        // イメージを付ける。
        let addImg = document.createElement('img')
        addImg.src = item.large_cover_image
        app.appendChild(addImg)
    })
}

getMovie(url)
