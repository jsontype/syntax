/* 
    [Promise]

    1. Promise 정의
        ★ Promise는 비동기 작업이 맞이할 "미래의 완료/실패 여부, 결과값"을 나타내는 객체이다.
        Promise는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로,
        비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있다.
        프로미스를 사용하면 비동기 메소드에서 마치 동기 메소드처럼 값을 반환할 수 있다.
        다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)을 반환한다.

    1. Promise는 다음 중 하나의 상태를 가진다.
        대기(pending) : 성공/실패도 아닌 초기 상태
        이행(fulfilled) : 성공적으로 완료된 상태
        거부(rejected) : 실패한 상태

    1. Promise 처리의 흐름
        Promise의 pending 상태 -> fulfilled 상태 -> async actions -> return -> .then()
        Promise의 pending 상태 -> rejected 상태 -> error handling -> return -> .catch()



    [async/await를 Promise.all과 사용하기]

    1. Promise.all
        Promise.all는 여러 비동기 함수들을 동시에 실행한다. 아까처럼 순차가 아니라 동시처리이다.
        * Promise.all를 사용 할 때에는, 등록한 프로미스 중 하나라도 실패하면, 모든 게 실패한 것으로 간주된다.
*/

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const getDog = async () => {
  await sleep(1000)
  return "멍멍이"
}

const getRabbit = async () => {
  await sleep(500)
  return "토끼"
}
const getTurtle = async () => {
  await sleep(3000)
  return "거북이"
}

async function process() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle(),
  ])
  console.log(dog)
  console.log(rabbit)
  console.log(turtle)
}

process()
