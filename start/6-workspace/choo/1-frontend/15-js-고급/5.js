/* 
  [async/await의 fetch를 이용한 예시]
*/

// 1. Promise/then을 사용한 방식
function api1() {
  const result = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  )
  return new Promise((resolve) => resolve(result)) // 이것은 api 호출의 결과를 json으로 파싱하여 출력하는 Promise이다. 여기서 reject 프롭은 생략했다.
}

// 2. Async/await를 사용한 방식
async function api2() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  )
  return result
}

// 3. Async/await를 사용한 방식의 함수를 호출 : async 호출 후 then으로 순차처리를 지시한다.
api2().then((res) => {
  console.log("process 처리 완료 : ", res)
})
// api 호출의 경우 계속 res를 리턴으로 하면서 다음과 같은 순차처리가 가능할 것으로 예상한다.
// .then(res => parse(res)) // 받아온 데이터를 json등으로 파싱을 한 뒤,
// .then(res => sort(res)) // 카테고리별로 어떤 분류를 한 뒤,
// .then(res => render(res)) // html 화면에 렌더링한다.
