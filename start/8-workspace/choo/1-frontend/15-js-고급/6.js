/* 
    [async/await 순차처리]

    1. 다수의 비동기 함수들의 순차처리
        이번에는, 비동기 함수를 몇개 더 만들어보겠다.
        현재 코드에서 getDog는 1초, getRabbit은 0.5초, getTurtle은 3초가 걸리고 있다.
        지금은 getDog -> getRabbit -> getTurtle 순서대로 실행이 되고 있는데, 하나가 끝나야 다음 작업이 시작하고 있다.
        이들을 process 함수에서 연달아서 사용하게 되면서, process 함수가 실행되는 총 시간은 4.5초가 된다.
        * 여기서 순차가 아니라 동시에 병렬 작업을 실행하고 싶다면, Promise.all을 사용해야 한다.
        * 여기서 순차가 아니라 가장 빠른 작업 하나만 실행하고 싶다면, Promise.race를 사용해야 한다.
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
  const dog = await getDog()
  console.log(dog)
  const rabbit = await getRabbit()
  console.log(rabbit)
  const turtle = await getTurtle()
  console.log(turtle)
}

process()
