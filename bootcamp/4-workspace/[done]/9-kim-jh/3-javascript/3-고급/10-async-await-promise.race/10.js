/* 
    [async/await]

    1. Promise.race
        Promise.race는 여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난 것 하나만의 결과값을 가져온다.
*/

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};
const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}

process();
