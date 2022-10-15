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
    for (let i = 1; i < arr.length; i++) {
        let app = document.querySelector('#app')

        // タイトルを付ける。
        let addItem = document.createElement('a')
        addItem.innerHTML = arr[i].title
        addItem.href = arr[i].url
        addItem.target = '_blank'
        app.appendChild(addItem)

        // ランクを付ける。
        let addRank = document.createElement('div')
        if (arr[i].rating >= 9) {
            addRank.setAttribute('class', 'good')
        } else if (arr[i].rating >= 7) {
            addRank.setAttribute('class', 'soso')
        } else {
            addRank.setAttribute('class', 'bad')
        }
        addRank.innerHTML = `評価点数：${arr[i].rating}/10点` // Backtick ` // Template Literal ${}
        app.appendChild(addRank)

        // Hot Icon付ける。
        let addHotIcon = document.createElement('span')
        if (arr[i].rating >= 9) {
            addHotIcon.innerHTML = '💥'
        }
        addRank.appendChild(addHotIcon)

        // イメージを付ける。
        let addImg = document.createElement('img')
        addImg.src = arr[i].large_cover_image
        app.appendChild(addImg)
    }
}

getMovie(url)
