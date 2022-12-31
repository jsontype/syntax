/* 
    [async/await의 fetch를 이용한 예시]

    1. Promise에 fetch 함수를 사용한 예시
        Promise/then 문법 사이에, async/await 문법을 다음 순서대로 추가해서 사용한다.
        fetch를 테스트할 때는 웹 브라우저 런타임에서 해야한다. html 파일을 열어보자.
*/

// 순서1. Promise : Promise 리턴 함수를 만든다.
function api() {
  const response = fetch("https://jsonplaceholder.typicode.com/posts");
  const result = response.then((res) => res.json());
  return new Promise((resolve) => resolve(result)); // 이것은 api 호출의 결과를 json으로 파싱하여 출력하는 Promise이다. 여기서 reject 프롭은 생략했다.
}

// 순서2. async : async를 붙인 함수를 만든다.
async function process() {
  // 순서3. await : await를 붙여서 Promise 리턴 함수를 호출한다.
  const result = await api();
  return result;
}

// 순서4. then : async 호출 후 then으로 순차처리를 지시한다.
process().then((res) => console.log("process 처리 완료 : ", res));
// api 호출의 경우 계속 res를 리턴으로 하면서 다음과 같은 순차처리가 가능할 것으로 예상한다.
// .then(res => parse(res)) // 받아온 데이터를 json등으로 파싱을 한 뒤,
// .then(res => sort(res)) // 카테고리별로 어떤 분류를 한 뒤,
// .then(res => render(res)) // html 화면에 렌더링한다.

// ★★ 1. 요약 (paapta!) : Promise 함수 선언 -> async 함수 선언 -> await를 Promise호출전 붙임 -> then을 async호출후 붙임
