let url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
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

        // 커버이미지 렌더링
        let addImg = document.createElement('img')
        addImg.setAttribute('class', 'movieCoverImage')
        addImg.src = arr[i].large_cover_image
        app.appendChild(addImg)
    }
}

getMovie(url)
