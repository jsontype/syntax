// [Promise/then]

// 1. Promise 함수 선언
// Promise는 성공할 때 resolve를, 실패할 때 reject를 호출해준다. (reject는 생략 가능)
// Promise는 함수의 return에 new Promise((resolve, reject) => { 비동기처리함수 + reject(error) + resolve(value) }를 넣어서 구현한다.
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      // reject : 실패한 케이스
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      // resolve : 성공한 케이스
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

// 1. Promise 함수를 실행한 뒤, then으로 다음 로직을 실행
// 비동기 함수가 끝난 뒤에, 다시 비동기 함수를 순차적으로 적용하더라도, .then을 이용함으로써 콜백 지옥을 해결할 수 있었다.
increaseAndPrint(0) // 1번째 실행 : 0부터 1초마다 1씩 더할 것이다.
  .then(increaseAndPrint) // 2번째 실행
  // = .then(n => { return increseAndPrint(n) })와 같다.
  // 새 함수를 선언하지 않고 그대로 넣어주면 앞서 호출한 increaseAndPrint의 결과값을 다시 increaseAndPrint의 인자로 넣어서 호출하게 된다.
  // 함수마다 다른 인자값을 넣어야할 경우에는 = .then(n => { return increseAndPrint(n) })와 같이 함수를 새로 선언해야 한다.
  .then(increaseAndPrint) // 2번째 실행
  .then(increaseAndPrint) // 3번째 실행
  .then(increaseAndPrint) // 4번째 실행
  .then(increaseAndPrint) // 5번째 실행. 여기서부터는 catch가 잡아내므로 그 이후로는 실행되지 않는다.
  .then(increaseAndPrint) // 6번째 실행
  .then(increaseAndPrint) // 7번째 실행
  .then(increaseAndPrint) // 8번째 실행
  // catch 를 통하여 reject가 호출되었을 시(= 실패했을 시) 수행 할 작업을 설정할 수 있다.
  // "5번째 실행"부터는 catch가 잡아내므로 그 이후로는 실행되지 않는다.
  .catch((e) => {
    // 여기서 e는 reject에 인자로 넣어준 값
    console.error(e); // console.error는 console.log와 달리 빨간 색으로 나오게 된다.
  });

/*
  1. 해결했으나 여전히 남은 숙제
      Promise/then을 사용하면, 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않게 된다.
      하지만, 이것도 여전히 불편한점이 있다.
          첫째, 에러를 잡을 때 "에러가 몇번째?"에서 발생했는지 알아내기 어렵다.
          둘째, 특정 "조건의 분기"를 나누는 작업이 어렵다.
          셋째, 특정 "값을 공유"해가면서 작업을 처리하기 까다롭다. 
      다음에서 배울 async/await 을 사용하면, 이러한 문제점을 깔끔하게 해결할 수 있다.
*/
