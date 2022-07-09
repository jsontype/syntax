let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
let movies = []

function getMovie(url) {
    fetch(url)
        .then((response) => { return response.json() })
        .then((json) => { 
            movies.push(json.data.movies)
            addItem(movies)
        })
}

function addItem(movies) {
    let arr = movies[0]
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let app = document.querySelector('#app')

        let title = document.createElement('a')
        title.setAttribute('class', 'title')
        title.setAttribute('id', 'title')
        title.innerHTML = arr[i].title_long
        title.href = arr[i].url
        title.target = "_blank"
        
        let image = document.createElement('img')
        image.src = arr[i].large_cover_image
        image.setAttribute('class', 'image')

        app.appendChild(image)
        app.appendChild(title)
    }
}

getMovie(url)

console.log(movies)