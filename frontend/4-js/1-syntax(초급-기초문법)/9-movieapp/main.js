/**
 * API를 호출한다.
 */
function getMovie() {
  // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
  fetch("https://yts.mx/api/v2/list_movies.json")
    // .then : API 호출이 끝나면
    // res : response 응답
    .then((res) => {
      // res를 JSON화하라
      return res.json()
    })
    // JSON화된 정보로 addItem 함수를 실행하라
    .then((json) => {
      const movies = json.data.movies
      addItem(movies)
    })
}

/**
 * 무비 리스트를 추가한다.
 */
function addItem(movies) {
  for (let i = 0; i < movies.length; i++) {
    // 부모 선택
    let app = document.querySelector("#app")
    // 자식 생성 : 타이틀
    let addItem = document.createElement("a")
    addItem.setAttribute("id", "title")
    addItem.setAttribute("class", "title")
    addItem.innerHTML = movies[i].title
    addItem.href = movies[i].url
    addItem.target = "_blank"
    // 자식 생성 : 배경이미지
    let addImg = document.createElement("img")
    addImg.src = movies[i].background_image
    addImg.setAttribute("id", "img")
    addImg.setAttribute("class", "movieImage")
    // addImg.style.width = '300px'
    // 부모에게 자식을 붙임
    app.appendChild(addItem)
    app.appendChild(addImg)
  }
}

// 실행
getMovie()
