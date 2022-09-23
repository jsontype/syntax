/* 
    [async/await 에러처리]

    1. 사용법 : async 함수에서 에러를 발생 시킬때에는 throw를 사용하고, 에러를 잡아낼 때에는 try/catch문을 사용한다.
*/

function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function makeError () {
    await sleep(1000)
    const error = new Error() // 순서1. 에러를 선언한다.    
    if (error) { // 순서2. 조건 분기를 통해, 에러가 있는 분기에 에러를 던진다.
        error.name = '강제로 발생시킨 에러'
        throw error
    }
}

async function process () {
    try { // 순서3. try를 하는 도중에 에러가 발생되면
        await makeError()
    } catch (e) { // 순서4. catch를 통해 에러를 콘솔에 출력한다.
        console.error('에러발생: ', e.name) // e.name이 아닌 e를 출력하면 에러 발생 위치 등 에러의 상세정보를 볼 수 있다.
    }
}

process()

/*
    1. Promise/then 문법에 async/await 문법을 추가했을 때의 장점
        첫째, 에러를 잡을 때 "에러가 몇번째?"에서 발생했는지 알아낼 수 있다.
        둘째, 특정 "조건의 분기"를 나눌 수 있다.
        셋째, 특정 "값을 공유"해가면서 작업을 처리할 수 있다.
*/
