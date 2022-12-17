// 다음과 같이 리턴값을 여러번에 걸쳐서 반환하는 것은 불가능.
// 아래의 함수는 호출 할 때마다 무조건 1을 반환함.
// function weirdFunction () {
//     return 1
//     return 2
//     return 3
//     return 4
//     return 5
// }

// function* 이라는 키워드를 사용해서 제너레이터 함수를 사용하면 함수에서 값을 순차적으로 반환할 수 있다.
// 함수의 흐름을 도중에 멈춰놓았다가 나중에 이어서 진행 할 수도 있다.
// 단, 제너레이터 함수를 호출한다고 해서 해당 함수 안의 코드가 바로 시작되는 건 아니다.
// generator.next() 를 호출해야만 코드가 실행되며, yield를 한 값을 반환하고 코드의 흐름을 멈춘다.
function* generatorFunction() {
  console.log("제네레이터 함수 1");
  yield 1;
  console.log("제네레이터 함수 2");
  yield 2;
  console.log("제네레이터 함수 3");
  yield 3;
  return 4;
}
const generator1 = generatorFunction();
generator1.next();
generator1.next();
generator1.next();

// next를 호출 할 때 인자를 전달하여 이를 제너레이터 함수 내부에서 사용 할 수도 있다.
function* sumGenerator() {
  console.log("sumGenerator이 시작됐습니다.");
  let a = yield;
  console.log("a값을 받았습니다.");
  let b = yield;
  console.log("b값을 받았습니다.");
  yield console.log(a + b);
}
const generator2 = sumGenerator();
generator2.next();
generator2.next(1); // a값을 받았습니다.
generator2.next(2); // b값을 받았습니다.
generator2.next(); // 3

// Generator로 액션을 모니터링할 수도 있다.
// * 추후에 redux-saga에서, 아래의 특성을 이용해서 액션을 모니터링하고, 특정 액션이 발생했을 때 원하는 코드를 실행시켜준다.
function* watchGenerator() {
  console.log("모니터링 시작!");
  while (true) {
    const action = yield;
    if (action.type === "HELLO") {
      console.log("안녕하세요?");
    }
    if (action.type === "BYE") {
      console.log("안녕히가세요.");
    }
  }
}
const watch = watchGenerator();
watch.next();
watch.next({ type: "HELLO" });
watch.next({ type: "BYE" });
