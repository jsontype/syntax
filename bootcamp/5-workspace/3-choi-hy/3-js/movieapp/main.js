let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
const movies = []

function getMovie (url) {
    // API 취득
    fetch(url)
        .then(res => res.json())
        .then(json => {
            movies.push(json.data.movies)
            render(movies)
        })    
}

function render (movies) {
    const arr = movies[0]
    console.log(arr)

    for (let i = 1; i < arr.length; i++) {
        let app = document.querySelector('#app')

        // 제목
        let addItem = document.createElement('a')
        addItem.setAttribute('class', 'movieTitle')
        addItem.innerHTML = arr[i].title
        addItem.href = arr[i].url
        app.appendChild(addItem)

        // 평점
        let addRank = document.createElement('div')
        addRank.setAttribute('class', 'movieRank')
        addRank.innerHTML = `평점 : ${arr[i].rating} / 10점`
        app.appendChild(addRank)

        // 무비이미지
        let addImg = document.createElement('img')
        addImg.setAttribute('class', 'movieImage')
        addImg.src = arr[i].large_cover_image
        app.appendChild(addImg)
    }
}

getMovie(url)
