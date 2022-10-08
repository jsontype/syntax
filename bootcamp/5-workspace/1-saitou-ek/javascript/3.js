let url = "https://yts.mx/api/v2/list_movies.json"
const movies = []

function getMovie (url) {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            movies.push(json.data.movies)
            print(movies)
        })
}

function print (movies) {
    let arr = movies[0]
    for (let i = 0; i < arr.length; i++) {
        console.log('movies配列の', i, '番目のインデクスのyear値は？', arr[i].year)
    }

}

getMovie(url)