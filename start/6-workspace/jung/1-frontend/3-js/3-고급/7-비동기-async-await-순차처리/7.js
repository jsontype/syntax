/* 
  [async/await 순차처리]

  1. 다수의 비동기 함수들의 순차처리
*/

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getDog() {
  await sleep(1000)
  return "멍멍이"
}

async function getCat() {
  await sleep(500)
  return "야옹"
}

async function getBird() {
  await sleep(3000)
  return "짹짹"
}

async function process() {
  const dog = await getDog()
  console.log(dog)
  const cat = await getCat()
  console.log(cat)
  const bird = await getBird()
  console.log(bird)
}

process()
