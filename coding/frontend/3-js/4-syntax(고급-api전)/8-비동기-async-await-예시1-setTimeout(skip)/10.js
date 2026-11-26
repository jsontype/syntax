/* 
    [async/await의 setTimeout을 이용한 예시]

    1. Promise에 setTimeout 함수를 사용한 예시
        Promise/then 문법 사이에, async/await 문법을 다음 순서대로 추가해서 사용한다.   
*/

// 순서1. Promise : Promise 리턴 함수를 만든다.
function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms)) // 이것은 ms 파라미터에 넣어준 시간 만큼 기다리는 Promise이다. 여기서 reject 프롭은 생략했다.
}

// 순서2. async : async를 붙인 함수를 만든다.
async function process () {
    console.log('안녕하세요!')
    // 순서3. await : await를 붙여서 Promise 리턴 함수를 호출한다.
    await sleep(1000) // 1초 쉰다.
    console.log('반갑습니다!')
    await sleep(1000)
}

// 순서4. then : async 호출 후 then으로 순차처리를 지시한다.
process()
    .then(process)
    .then(process)
    .then(process)
    .then(process)
    .then(process)
    .then(process)

// ★★ 1. 요약 (paapta!) : Promise 함수 선언 -> async 함수 선언 -> await를 Promise호출전 붙임 -> then을 async호출후 붙임
