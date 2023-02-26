console.log(document) // dom -> documet object model -> js가 html 태그들을 "조작할 수 있게" 객체화해놓은 것

// dom에서 특정 태그를 id를 통해 조작하는 방법
function changeApp1 () {
  const app = document.querySelector('#app')
  app.innerHTML = '좌클릭으로 바뀐 앱'  
}

function changeApp2 () {
  const app = document.querySelector('#app')
  app.innerHTML = '우클릭으로 바뀐 앱'  
}
