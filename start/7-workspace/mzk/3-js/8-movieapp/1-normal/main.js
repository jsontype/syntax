function getMovies() {
  // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((res) => res.json())
    .then((json) => {
      const movies = json.data.movies
      console.log(movies)
      addItem(movies)
    })
}

function addItem(movies) {
  for (let i = 0; i < movies.length; i++) {
    // DOM(Document Object Model)からidがappの要素を取得する
    const app = document.querySelector("#app")

    // Movie Title
    const addItem = document.createElement("a")
    addItem.setAttribute("class", "movieTitle")
    addItem.innerHTML = `${movies[i].title} ${movies[i].rating >= 9 && "👍"}`
    addItem.href = movies[i].url
    addItem.target = "_blank"
    app.appendChild(addItem)

    // Movie Rating
    const addRating = document.createElement("div")
    if (movies[i].rating >= 9) {
      addRating.setAttribute("class", "movieRatingGood")
    } else if (movies[i].rating >= 7) {
      addRating.setAttribute("class", "movieRatingSoso")
    } else {
      addRating.setAttribute("class", "movieRatingBad")
    }
    addRating.innerHTML = `評価： ${movies[i].rating} / 10`
    app.appendChild(addRating)

    // Movie Image
    const addImg = document.createElement("img")
    addImg.setAttribute("class", "movieImg")
    addImg.src = movies[i].large_cover_image
    app.appendChild(addImg)
  }
}

getMovies()
