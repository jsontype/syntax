// 비동기 처리는 .then()으로 순차처리를 할 수 있다.
fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
  .then((res) => res.json())
  .then((json) => {
    console.log(json.data.movies)
    let arr = json.data.movies
    for (let i = 0; i < arr.length; i++) {
      let app = document.querySelector("#app")
      app.innerHTML =
        app.innerHTML + "<br>" + `<a href=${arr[i].url}>${arr[i].title}</a>`
    }
  })
