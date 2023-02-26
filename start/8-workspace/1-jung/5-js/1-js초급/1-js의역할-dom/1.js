// dom : document object model. html 파일을 js가 조작할 수 있게 객체화한 것
console.log(document)
console.log(document.querySelector("#hello"))

function ja() {
  const hello = document.querySelector("#hello")
  hello.innerHTML = "こんにちは"
}

function ko() {
  const hello = document.querySelector("#hello")
  hello.innerHTML = "안녕하세요"
}
