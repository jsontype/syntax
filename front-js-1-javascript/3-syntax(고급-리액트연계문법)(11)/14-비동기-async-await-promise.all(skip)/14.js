/* 
    [async/await를 Promise.all과 사용하기]

    1. Promise.all
        Promise.all는 여러 비동기 함수들을 동시에 실행한다. 아까처럼 순차가 아니라 동시처리이다.
        * Promise.all를 사용 할 때에는, 등록한 프로미스 중 하나라도 실패하면, 모든 게 실패한 것으로 간주된다.
*/

function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getDog = async () => {
    await sleep(1000)
    return '멍멍이'
}

const getRabbit = async () => {
    await sleep(500)
    return '토끼'
}
const getTurtle = async () => {
    await sleep(3000)
    return '거북이'
}

async function process () {
    const [dog, rabbit, turtle] = await Promise.all([
        getDog(),
        getRabbit(),
        getTurtle()
    ])
    console.log(dog)
    console.log(rabbit)
    console.log(turtle)
}

process()
