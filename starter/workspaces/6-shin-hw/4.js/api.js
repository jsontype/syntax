

let url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        let movies = data.data.movies
        console.log(movies)
        render(movies)
    })


function render (movies) {
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i].title)
    }
}