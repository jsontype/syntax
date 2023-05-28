// console.log(document)
// Document Object Model : HTML 문서객체모델. JS가 HTML을 바꾸기 위해서 가지고 있는 객체 모델

// let title = document.querySelector("#title")
// console.log("title: ", title)
// title.innerHTML = "카운터 앱"

let count = document.querySelector("#count")

function plus() {
  count.innerHTML++
}

function minus() {
  count.innerHTML--
}
