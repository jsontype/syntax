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
  movies.forEach((item) => {
    // DOM(Document Object Model)からidがappの要素を取得する
    const app = document.querySelector("#app")

    // Movie Title
    const addItem = document.createElement("a")
    addItem.setAttribute("class", "movieTitle")
    addItem.innerHTML = `${item.title} ${item.rating >= 9 && "👍"}`
    addItem.href = item.url
    addItem.target = "_blank"
    app.appendChild(addItem)

    // Movie Rating
    const addRating = document.createElement("div")
    item.rating >= 9
      ? addRating.setAttribute("class", "movieRatingGood")
      : item.rating >= 7
      ? addRating.setAttribute("class", "movieRatingSoso")
      : addRating.setAttribute("class", "movieRatingBad")
    addRating.innerHTML = `評価： ${item.rating} / 10`
    app.appendChild(addRating)

    // Movie Image
    const addImg = document.createElement("img")
    addImg.setAttribute("class", "movieImg")
    addImg.src = item.large_cover_image
    app.appendChild(addImg)
  })
}

getMovies()
