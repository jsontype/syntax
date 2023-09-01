function getAPI() {
  // 로딩 시작
  let parent = document.querySelector("#app")
  parent.innerHTML = "로딩중..."

  // API 취득하기
  fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then((res) => res.json())
    .then((json) => {
      let movies = json.data.movies
      console.log(movies)

      // 로딩 끝
      parent.innerHTML = ""

      // DOM (Document Object Model) 조작하기 : DOM은 JS가 (HTML 문서를 조작하기 위해) HTML 문서를 객체화해서 document에 담은 것
      for (let i = 0; i < movies.length; i++) {
        let son = document.createElement("div")
        son.innerHTML = movies[i].title
        parent.appendChild(son)
      }
    })
}
