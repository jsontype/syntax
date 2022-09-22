/* 
    [async/await]

    1. 사용법 : Promise/then 문법 사이에, async/await 문법을 다음 순서대로 추가해서 사용한다.
*/



// 1. Promise에 setTimeout 함수를 사용한 예시

// 순서1. Promise 리턴 함수(Promise를 리턴하는 함수)를 만든다.
function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms)) // 이것은 ms 파라미터에 넣어준 시간 만큼 기다리는 Promise이다. 여기서 reject 프롭은 생략했다.
}

// 순서2. async를 붙인다.
async function process () {
    console.log('안녕하세요!')
    // 순서3. await를 붙인다. 그 뒤 Promise 리턴 함수를 붙인다.
    await sleep(1000) // 1초 쉰다.
    console.log('반갑습니다!')
    await sleep(1000)
}

process()
    .then(process)
    .then(process)
    .then(process)
    .then(process)
    .then(process)
    .then(process)



// 예시2. : setTimeout 비동기 함수 사용













/*
    1. Promise/then 문법에 async/await 문법을 추가했을 때의 장점
        첫째, 에러를 잡을 때 "에러가 몇번째?"에서 발생했는지 알아낼 수 있다.
        둘째, 특정 "조건의 분기"를 나눌 수 있다.
        셋째, 특정 "값을 공유"해가면서 작업을 처리할 수 있다.
*/