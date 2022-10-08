let url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
const movies = []

function getMovie (url) {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            movies.push(json.data.movies) 
            addItem(movies)
        })
}

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
        app.appendChild(addItem)

        // 영화이미지
        let addImg = document.createElement('img')
        addImg.setAttribute('class', 'movieImage')
        addImg.src = item.large_cover_image
        app.appendChild(addImg)
    })
}

getMovie(url)
