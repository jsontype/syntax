let url = "https://yts.mx/api/v2/list_movies.json"
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
        let addItem = document.createElement('a')
        addItem.innerHTML = arr[i].title
        addItem.href = arr[i].url
        addItem.target = '_blank'
        app.appendChild(addItem)
        let addImg = document.createElement('img')
        addImg.src = arr[i].large_cover_image
        app.appendChild(addImg)
    }
}

getMovie(url)
