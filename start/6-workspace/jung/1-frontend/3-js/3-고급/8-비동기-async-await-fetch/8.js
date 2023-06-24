/* 
  [async/await의 fetch를 이용한 예시]

  1. Promise에 fetch 함수를 사용한 예시
    Promise/then 문법 사이에, async/await 문법을 다음 순서대로 추가해서 사용한다.
    fetch를 테스트할 때는 웹 브라우저 런타임에서 해야한다. html 파일을 열어보자.
*/

// 순서1. Promise : Promise 리턴 함수를 만든다.
function api() {
  const response = fetch("https://jsonplaceholder.typicode.com/posts")
  const result = response.then((res) => res.json())
  return new Promise((resolve) => resolve(result)) // 이것은 api 호출의 결과를 json으로 파싱하여 출력하는 Promise이다. 여기서 reject 프롭은 생략했다.
}

// 순서2. async : async를 붙인 함수를 만든다.
async function process() {
  // 순서3. await : await를 붙여서 Promise 리턴 함수를 호출한다.
  alert("로딩화면을 띄운다.")
  const result = await api()
  alert("로딩화면을 끈다.")
  return result
}

process().then((res) => {
  console.log(res)
  alert("렌더링을 한다.")
})
