/* 
    [async/await의 fetch를 이용한 예시]

    1. Promise에 fetch 함수를 사용한 예시
        Promise/then 문법 사이에, async/await 문법을 다음 순서대로 추가해서 사용한다.
        fetch를 테스트할 때는 웹 브라우저 런타임에서 해야한다. html 파일을 열어보자.
*/

// 순서1. Promise : Promise 리턴 함수를 만든다.
function api() {
  const response = fetch("https://yts.mx/api/v2/list_movies.json")
  const result = response.then((res) => res.json())
  return new Promise((resolve) => resolve(result)) // 이것은 api 호출의 결과를 json으로 파싱하여 출력하는 Promise이다. 여기서 reject 프롭은 생략했다.
}

// 순서2. async : async를 붙인 함수를 만든다.
async function process() {
  try {
    // 순서3. await : await를 붙여서 Promise 리턴 함수를 호출한다. 단, try를 하는 도중에 에러가 발생되면
    const result = await api()
    return result
  } catch (e) {
    // 순서4. catch를 통해 에러를 콘솔에 출력한다.
    console.error("에러발생: ", e.name) // e.name이 아닌 e를 출력하면 에러 발생 위치 등 에러의 상세정보를 볼 수 있다.
  }
}

// 순서4. then : async 호출 후 then으로 순차처리를 지시한다.
process().then((res) => console.log("process 처리 완료 : ", res))
// api 호출의 경우 계속 res를 리턴으로 하면서 다음과 같은 순차처리가 가능할 것으로 예상한다.
// .then(res => parse(res)) // 받아온 데이터를 json등으로 파싱을 한 뒤,
// .then(res => sort(res)) // 카테고리별로 어떤 분류를 한 뒤,
// .then(res => render(res)) // html 화면에 렌더링한다.

// ★★ 1. 요약 (paapta!) : Promise 함수 선언 -> async 함수 선언 -> await를 Promise호출전 붙임 -> then을 async호출후 붙임

/*
  1. Promise에 fetch 함수를 사용한 예시2
      ★★ 비동기 함수는 순서1의 Promise, 순서3의 await를 생략하고, 순서2의 async, 순서4의 then만 써도 됨
          fetch 같은 비동기 함수는 자동으로 리턴값이 Promise가 되기 때문에, 
          아래와 같이 순서1의 Promise, 순서3의 await의 표기를 생략한 코드도 가능하다.
      ★ fetch 앞에 await는 왜 생략?
          사실, 리턴값이 Promise이라고 await를 다 쓰는 게 아니라, 
          return을 new Promise(resolve => resolve)로 직접 지정했을 때만 쓰는 거라서 여기선 쓰지 않는다.
      아래 주석을 풀어서 이것도 같이 테스트해보자.
*/

// async function process2 () {
//     const response = fetch("https://jsonplaceholder.typicode.com/posts")
//     const result = response.then(res => res.json())
//     return result
// }

// process()
//     .then(res => console.log('process2 처리 완료 : ', res))
